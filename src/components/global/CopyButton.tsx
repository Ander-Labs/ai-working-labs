// src/components/ui/ai/CopyButton.tsx
import { useEffect, useRef } from 'react';
import { IconButton } from "@chakra-ui/react";
import { Clipboard } from 'lucide-react';
import ClipboardJS from 'clipboard';

interface CopyButtonProps {
    textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const clipboard = new ClipboardJS(buttonRef.current!, {
            text: () => textToCopy,
        });

        return () => {
            clipboard.destroy();
        };
    }, [textToCopy]);

    return (
        <IconButton
            ref={buttonRef}
            icon={<Clipboard />}
            aria-label="Copy to clipboard"
            onClick={() => { }}
            bg="transparent"
        />
    );
}
