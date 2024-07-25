// src/components/ui/form/JobForm.tsx
"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Button, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { jobSchema, JobFormInputs } from "@/schema/jobSchema";
import CompanyInfoForm from "./CompanyInfoForm";
import ProfessionalDetailsForm from "./ProfessionalDetailsForm";
import ExperienceForm from "./ExperienceForm";
import SkillsForm from "./SkillsForm";
import ContractDetailsForm from "./ContractDetailsForm";
import BenefitsForm from "./BenefitsForm";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function FormJob() {
  const methods = useForm<JobFormInputs>({
    resolver: yupResolver(jobSchema),
  });

  const [alertStatus, setAlertStatus] = useState<"success" | "error" | null>(
    null
  );
  const [alertMessage, setAlertMessage] = useState<string>("");

  const onSubmit = (data: JobFormInputs) => {
    try {
      console.log(data);
      setAlertStatus("success");
      setAlertMessage(
        "Los datos del formulario han sido enviados correctamente."
      );
    } catch (error) {
      setAlertStatus("error");
      setAlertMessage(
        `Error al enviar los datos del formulario: ${(error as Error).message}`
      );
      console.error("Error al enviar los datos del formulario:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={methods.handleSubmit(onSubmit)} p={4}>
        <VStack spacing={4}>
          {alertStatus === "success" && (
            <Alert status="success">
              <AlertIcon />
              <AlertTitle>Formulario enviado!</AlertTitle>
              <AlertDescription>{alertMessage}</AlertDescription>
            </Alert>
          )}
          {alertStatus === "error" && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{alertMessage}</AlertDescription>
            </Alert>
          )}
          <CompanyInfoForm />
          <ProfessionalDetailsForm />
          <ExperienceForm />
          <SkillsForm />
          <ContractDetailsForm />
          <BenefitsForm />
          <Button type="submit" colorScheme="red">
            Crear Oferta Laboral
          </Button>
        </VStack>
      </Box>
    </FormProvider>
  );
}
