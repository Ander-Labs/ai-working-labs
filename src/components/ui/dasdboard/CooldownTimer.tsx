import { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

const COOLDOWN_TIME = 3600 * 1000; // 1 hora en milisegundos

const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default function CooldownTimer() {
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    useEffect(() => {
        const lastGenerated = localStorage.getItem('lastGenerated');
        if (lastGenerated) {
            const timeSinceLast = Date.now() - parseInt(lastGenerated);
            if (timeSinceLast < COOLDOWN_TIME) {
                setTimeLeft(COOLDOWN_TIME - timeSinceLast);
            }
        }

        const interval = setInterval(() => {
            const lastGenerated = localStorage.getItem('lastGenerated');
            if (lastGenerated) {
                const timeSinceLast = Date.now() - parseInt(lastGenerated);
                if (timeSinceLast < COOLDOWN_TIME) {
                    setTimeLeft(COOLDOWN_TIME - timeSinceLast);
                } else {
                    setTimeLeft(null);
                    clearInterval(interval);
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box textAlign="center" mt={4}>
            {timeLeft !== null ? (
                <Text color="red">
                    Puedes generar una nueva oferta en: {formatTime(timeLeft)}
                </Text>
            ) : (
                <Text color="green">Puedes generar una nueva oferta ahora.</Text>
            )}
        </Box>
    );
};

