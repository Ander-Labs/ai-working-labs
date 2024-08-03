// src/components/ui/form/BenefitsForm.tsx

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  FormHelperText,
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
        placeholder="Describe los beneficios que la empresa ofrece"
      ></Textarea>
      <FormHelperText>Incluye beneficios como seguro de salud, vacaciones, etc.</FormHelperText>
      <FormErrorMessage>{errors.benefits?.message?.toString()}</FormErrorMessage>
    </FormControl>
  );
}
