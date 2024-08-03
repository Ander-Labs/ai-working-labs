// src/components/ui/form/ExperienceForm.tsx

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  FormHelperText,
  Stack,
} from "@chakra-ui/react";

export default function ExperienceForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Stack spacing={4}>
      <FormControl isInvalid={!!errors.hasExperience}>
        <FormLabel>¿Requiere experiencia laboral?</FormLabel>
        <Select placeholder="Selecciona una opción" {...register("hasExperience")}>
          <option value="true">Sí</option>
          <option value="false">No</option>
        </Select>
        <FormHelperText>Indica si el candidato debe tener experiencia laboral previa.</FormHelperText>
        <FormErrorMessage>{errors.hasExperience?.message?.toString()}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.candidateLevel}>
        <FormLabel>Nivel del candidato</FormLabel>
        <Select {...register("candidateLevel")} placeholder="Selecciona el nivel del candidato">
          <option value="junior">Junior</option>
          <option value="semi-senior">Semi-Senior</option>
          <option value="senior">Senior</option>
        </Select>
        <FormHelperText>Selecciona el nivel de experiencia del candidato.</FormHelperText>
        <FormErrorMessage>{errors.candidateLevel?.message?.toString()}</FormErrorMessage>
      </FormControl>
    </Stack>
  );
}

