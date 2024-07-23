// src/components/ui/form/JobForm.tsx
"use client";
import React from "react";
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
import { JobFormInputs } from "@/types/JobFormInputs";

export default function FormJob() {
  const methods = useForm<JobFormInputs>({
    resolver: yupResolver(jobSchema),
  });

  const onSubmit = (data: JobFormInputs) => {
    console.log(data);
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
