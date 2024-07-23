// src/components/ui/form/CompanyInfoForm.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

export default function CompanyInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormControl isInvalid={!!errors.companyName}>
        <FormLabel>Nombre de la Empresa</FormLabel>
        <Input
          {...register("companyName")}
          placeholder="Nombre de la Empresa"
        />
      </FormControl>
      <FormControl isInvalid={!!errors.companyDescription}>
        <FormLabel>A qué se dedica la Empresa</FormLabel>
        <Textarea
          {...register("companyDescription")}
          placeholder="Descripción corta de la Empresa"
        />
      </FormControl>
    </>
  );
}
