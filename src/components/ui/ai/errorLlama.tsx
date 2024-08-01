//src/components/ui/ai/errorLlama.tsx

import { Alert, AlertIcon, AlertTitle, AlertDescription, Flex, Button } from "@chakra-ui/react";
import { RotateCcw } from 'lucide-react';

interface ErrorLlamaProps {
    error: any;
    reload: () => void;
}

export default function ErrorLlama({ error, reload }: ErrorLlamaProps) {
    return (
        <>
            <Alert status="error" variant='left-accent'>
                <AlertIcon />
                <Flex justifyContent={"center"} alignContent={"center"} flexDirection={"column"}>
                    <AlertTitle>Se ha producido un error: {error.name} </AlertTitle>
                    <AlertDescription>{error.message} </AlertDescription>
                    <Button type="button" size='md' variant='solid' leftIcon={<RotateCcw />} colorScheme='red' onClick={reload}>
                        Retry
                    </Button>
                </Flex>
            </Alert>
        </>
    );
}
