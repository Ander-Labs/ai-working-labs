// src/components/ui/form/FormResult.tsx
'use client'
import { useChat } from 'ai/react';
import { Box, Text } from "@chakra-ui/react";

interface FormResultProps {
  description: string;
}

export default function FormResult({ description}:FormResultProps) {
  return (
    <Box mt={8} p={4} borderWidth="1px" borderRadius="lg" bg="white" boxShadow="md">
      <Text fontSize="xl" fontWeight="bold">Oferta Laboral Generada</Text>
      <Text mt={4}>{description}</Text>
    </Box>
  );
};

