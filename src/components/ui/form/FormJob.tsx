
// src/components/ui/form/JobForm.tsx
"use client";
// import REACT AND HOOKS and yup
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// imports CHAKRA UI
import {
  Box, Button, VStack, Stack, Select, Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription, Flex, Container, Text
} from "@chakra-ui/react";
// import SCHEMA and components form
import { jobSchema, JobFormInputs } from "@/schema/jobSchema";
//import COmponents
import CompanyInfoForm from "./CompanyInfoForm";
import ProfessionalDetailsForm from "./ProfessionalDetailsForm";
import ExperienceForm from "./ExperienceForm";
import SkillsForm from "./SkillsForm";
import ContractDetailsForm from "./ContractDetailsForm";
import BenefitsForm from "./BenefitsForm";
import AlertMessage from "./AlertMessage"
// import utils
import { generatePrompt } from "@/services/prompt/promptGenerator";

// Import GlobalStore
import { useStore } from "@/Global/useStore";


export default function FormJob() {
  const methods = useForm<JobFormInputs>({
    resolver: yupResolver(jobSchema),
  });
  const [alertStatus, setAlertStatus] = useState<"success" | "error" | null>(null);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const { setPrompt } = useStore();

  const onSubmit = (data: JobFormInputs) => {
    try {
      const prompt = generatePrompt(data);
      setPrompt(prompt);
      setAlertStatus("success");
      setAlertMessage("Los datos del formulario han sido Validados correctamente.");
    } catch (error) {
      setAlertStatus("error");
      setAlertMessage(`Error al Validar los datos del formulario: ${(error as Error).message}`);
    }
  };

  return (
    <>
      {alertStatus && <AlertMessage alertStatus={alertStatus} alertMessage={alertMessage} />}
      <FormProvider {...methods} >
        <Box
          as="form"
          onSubmit={methods.handleSubmit(onSubmit)}
          p={{ base: 4, md: 8 }}
          w="100%"
          maxW="800px"
          mx="auto"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          my="8"
          bg="white"
          boxShadow="md"
        >
          <VStack spacing={6}>

            <Stack spacing={4} w="100%" >
              <CompanyInfoForm />
              <ProfessionalDetailsForm />
              <ExperienceForm />
              <SkillsForm />
              <ContractDetailsForm />
              <BenefitsForm />

            </Stack>
            <Button
              type="submit"
              colorScheme="red"
              w={{ base: "full", md: "auto" }}
            >
              Validar Datos
            </Button>
          </VStack>
        </Box>
      </FormProvider>
    </>
  );
}

