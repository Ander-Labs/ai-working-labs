import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
    Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useState } from 'react';

export default function AlphaAlert() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }
    return (
        <>
            <Alert status='warning' variant='top-accent' borderRadius='md' p={4} position='relative'>
                <AlertIcon />
                <AlertTitle>Alpha Version</AlertTitle>
                <AlertDescription>Working Labs está actualmente en versión Alpha. Espere cambios y errores. <Link href='https://github.com/Ander-Labs/ai-working-labs' color={'red'} isExternal >
                    Mas informacion en<ExternalLinkIcon mx='2px' />
                </Link></AlertDescription>
                <CloseButton position='absolute' right='8px' top='8px' onClick={handleClose} />
            </Alert>
        </>
    );
}