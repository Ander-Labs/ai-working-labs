//src/components/ui/ai/ChatLlama.tsx
'use client';

import { useState, useEffect } from 'react';
import { useChat } from 'ai/react';
import { useStore } from "@/Global/useStore";
import { Box, Button, Text } from "@chakra-ui/react";
import { ChangeEvent } from 'react';
import ErrorLlama from './errorLlama'
import MessagesUI from './messagesUI';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
const COOLDOWN_TIME = 3600 * 1000; // 1 hora en milisegundos

export default function ChatLlama() {
    const { messages, handleSubmit, input, handleInputChange, error, reload, isLoading } = useChat({ api: '/api/llama', keepLastMessageOnError: true });

    const { prompt } = useStore();
    const [cooldown, setCooldown] = useState(false);

    useEffect(() => {
        const event = {
            target: { value: prompt }
        } as ChangeEvent<HTMLInputElement>;
        handleInputChange(event);
    }, [handleInputChange, prompt]);

    useEffect(() => {
        const lastGenerated = localStorage.getItem('lastGenerated');
        if (lastGenerated) {
            const timeSinceLast = Date.now() - parseInt(lastGenerated);
            if (timeSinceLast < COOLDOWN_TIME) {
                setCooldown(true);
                setTimeout(() => setCooldown(false), COOLDOWN_TIME - timeSinceLast);
            }
        }
    }, []);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (cooldown) {
            alert("You can only generate one offer per hour.");
            return;
        }
        handleSubmit(e);
        localStorage.setItem('lastGenerated', Date.now().toString());
        setCooldown(true);
        setTimeout(() => setCooldown(false), COOLDOWN_TIME);
    };

    return (
        <>
            {error && (
                <>
                    <ErrorLlama error={error} reload={reload} />
                </>
            )}
            <Box w={'100%'} display={'flex'} justifyContent={'center'} >
                <Box
                    maxH="450px"
                    overflowY="auto"
                    w="100%"
                    p={4}
                >
                    {messages.map((m, i) => (
                        <MessagesUI key={i} i={i} m={m} isLoading={isLoading} />
                    ))}
                </Box>
                <Box p={4} w={'100%'} >
                    {cooldown && (
                        <Text color="red" textAlign="center" mb={4}>
                            Sólo puede generar una oferta por hora.
                        </Text>
                    )}
                    <form onSubmit={onSubmit} className='flex gap-4 justify-center'>
                        <input
                            type="hidden"
                            name="prompt"
                            value={input}
                            onChange={handleInputChange}
                            disabled={error != null}
                        />
                        <Button
                            colorScheme="red"
                            w="auto"
                            type="submit"
                            isDisabled={cooldown}
                        >
                            Generar Oferta
                        </Button>
                    </form>
                </Box>
            </Box>
        </>
    );
}
