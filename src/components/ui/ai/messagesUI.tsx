//src/components/ui/ai/messagesUI.tsx

import { Box, Flex, Skeleton, Spinner } from "@chakra-ui/react";
import MessageContent from "./MessageContent";
import CopyButton from "@/components/global/CopyButton";

interface MessagesUIProps {
    i: number;
    m: { role: string; content: string };
    isLoading: boolean;
}



export default function MessagesUI({ i, m, isLoading }: MessagesUIProps) {
    return (
        <>
            <Box whiteSpace="pre-wrap" key={i}>
                {m.role === 'user' ? (
                    isLoading ? (
                        <Skeleton height="40px" w="100%" mt={8} />
                    ) : (
                        <Box visibility="hidden" p={2} w="100%" mt={8}></Box>
                    )
                ) : (
                    <Flex p={2} bg={'white'} w={'100%'} mt={8} justifyContent={'center'}>
                        <span className='text-xl font-bold p-4'>{m.role === 'user' ? 'User: ' : 'AI: '}</span>
                        <MessageContent content={m.content} />
                        <CopyButton textToCopy={m.content} />
                    </Flex>
                )}
            </Box>
        </>
    );
}
