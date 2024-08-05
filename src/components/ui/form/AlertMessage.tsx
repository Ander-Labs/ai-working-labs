// src/components/ui/form/AlertMessage.tsx

import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

interface AlertProps {
  alertStatus: "success" | "error";
  alertMessage: string;
}

export default function AlertMessage({ alertStatus, alertMessage }: AlertProps) {

  const toast = useToast()

  useEffect(() => {
    if (alertStatus && alertMessage) {
      toast({
        title: alertStatus === "success" ? "Formulario Validado!" : "Error",
        description: alertMessage,
        status: alertStatus,
        position: 'top',
        variant: 'solid',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [alertStatus, alertMessage, toast]);

  return null;

};

