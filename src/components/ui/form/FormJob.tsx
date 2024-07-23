// src/components/ui/form/JobForm.tsx
"use client";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Button, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { jobSchema } from "@/schema/jobSchema";
import CompanyInfoForm from "./CompanyInfoForm";
import ProfessionalDetailsForm from "./ProfessionalDetailsForm";
import ExperienceForm from "./ExperienceForm";
import SkillsForm from "./SkillsForm";
import ContractDetailsForm from "./ContractDetailsForm";
import BenefitsForm from "./BenefitsForm";
// import { JobFormInputs } from "@/types/JobFormInputs";
import {JobFormInputs} from '@/schema/jobSchema'

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

  const onSubmit = (data: JobFormInputs) => {
    try {
      // Lógica para enviar los datos del formulario
      console.log(data);
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>Formulario enviado!</AlertTitle>
        <AlertDescription>
          Los datos del formulario han sido enviados correctamente.
        </AlertDescription>
      </Alert>;
    } catch (error) {
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Ha ocurrido un error al enviar los datos del formulario.
        </AlertDescription>
      </Alert>;
      console.error("Error al enviar los datos del formulario:", error);
    }

    // Lógica para enviar los datos del formulario
  };

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={methods.handleSubmit(onSubmit)} p={4}>
        <VStack spacing={4}>
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
