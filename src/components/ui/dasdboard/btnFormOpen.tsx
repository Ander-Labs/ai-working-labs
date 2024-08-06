'use client'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Box

} from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react';
import FormJob from '@/components/ui/form/FormJob';
import { useFormStore } from "@/Global/useFormStore";

const COOLDOWN_TIME = 3600 * 1000; // 1 hora en milisegundos


export default function BtnFormOpen() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)
    const formValidated = useFormStore(state => state.formValidated);
    const setFormValidated = useFormStore(state => state.setFormValidated);

    const [cooldown, setCooldown] = useState(false);

    useEffect(() => {
        if (formValidated) {
            onClose();

            setFormValidated(false);
        }
    }, [formValidated, onClose, setFormValidated]);

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


    return (
        <>
            <Box w={'100%'} display='flex' justifyContent='center' >
                <Button ref={btnRef} colorScheme='orange' onClick={onOpen} w={'auto'} isDisabled={cooldown}>
                    Crear Oferta Laboral
                </Button>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'lg'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Balidar datos </DrawerHeader>
                    <DrawerBody>
                        <FormJob />
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}