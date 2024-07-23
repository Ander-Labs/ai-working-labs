// src/components/ui/form/ExperienceForm.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function ExperienceForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormControl isInvalid={!!errors.hasExperience}>
        <FormLabel>¿Requiere experiencia laboral?</FormLabel>
        <Select
          placeholder="Selecciona una opción"
          {...register("hasExperience")}
        >
          <option value="true">Sí</option>
          <option value="false">No</option>
        </Select>
      </FormControl>

      <FormControl isInvalid={!!errors.candidateLevel}>
        <FormLabel>Nivel del candidato</FormLabel>
        <Select
          {...register("candidateLevel")}
          placeholder="Selecciona el nivel del candidato"
        >
          <option value="junior">Junior</option>
          <option value="semi-senior">Semi-Senior</option>
          <option value="senior">Senior</option>
        </Select>
      </FormControl>
    </>
  );
}
