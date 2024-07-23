// src/components/ui/form/BenefitsForm.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { benefits } from "@/data/benefits";

export default function BenefitsForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={!!errors.benefits}>
      <FormLabel>Beneficios que ofrece la Empresa</FormLabel>
      <Select
        {...register("benefits")}
        placeholder="Selecciona los beneficios"
        multiple
      >
        {benefits.map((benefit) => (
          <option key={benefit} value={benefit}>
            {benefit}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
