// src/components/ui/form/BenefitsForm.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";


export default function BenefitsForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={!!errors.benefits}>
      <FormLabel>Beneficios que ofrece la Empresa</FormLabel>
      <Textarea
        {...register("benefits")}
        placeholder="Selecciona los beneficios"
      ></Textarea>
      <FormErrorMessage>
        {errors.benefits?.message?.toString()}
      </FormErrorMessage>
    </FormControl>
  );
}
