// src/components/ui/ai/MessageContent.tsx
import { Box, Text } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { ComponentPropsWithoutRef } from 'react';

interface MessageContentProps {
    content: string;
}

export default function MessageContent({ content }: MessageContentProps) {
    return (
        <Box boxShadow={'md'} p={4} bg={'white'} w={'100%'} mt={8} borderWidth="1px" borderRadius="lg" borderColor={'gray.300'} maxW={'900px'}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                    p: (props: ComponentPropsWithoutRef<'p'>) => <Text {...props} />,
                    code: (props: ComponentPropsWithoutRef<'code'> & { inline?: boolean }) => {
                        const { inline, className, children, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <pre className={className}>
                                <code {...rest}>{children}</code>
                            </pre>
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </Box>
    );
}
