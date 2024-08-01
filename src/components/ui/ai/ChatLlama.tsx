//src/components/ui/ai/ChatLlama.tsx
'use client';

import { useState, useEffect } from 'react';
import { useChat } from 'ai/react';
import { useStore } from "@/Global/useStore";
import { Box, Button } from "@chakra-ui/react";
import { ChangeEvent } from 'react';
import ErrorLlama from './errorLlama'
import MessagesUI from './messagesUI';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function ChatLlama() {
    const { messages, handleSubmit, input, handleInputChange, error, reload } = useChat({ api: '/api/llama', keepLastMessageOnError: true });

    const { prompt } = useStore();

    useEffect(() => {
        const event = {
            target: { value: prompt }
        } as ChangeEvent<HTMLInputElement>;
        handleInputChange(event);
    }, [handleInputChange, prompt]);

    return (
        <>
            {error && (
                <>
                    <ErrorLlama error={error} reload={reload} />
                </>
            )}

            {messages.map((m, i) => (
                <MessagesUI key={i} i={i} m={m} />
            ))}

            <Box p={4} w={'100%'} mt={8}>

                <form onSubmit={handleSubmit} className='flex gap-4 justify-center'>
                    <input
                        type="hidden"
                        name="prompt"
                        value={input}
                        onChange={handleInputChange}
                        disabled={error != null}
                    />
                    <Button
                        colorScheme="red"
                        w={{ base: "full", md: "auto" }}
                        type="submit"
                    >
                        Generar Oferta
                    </Button>
                </form>
            </Box>
        </>
    );
}
