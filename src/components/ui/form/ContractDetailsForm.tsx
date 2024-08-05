// src/components/ui/form/ContractDetailsForm.tsx
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  InputLeftElement,
  InputGroup,
  FormErrorMessage,
  FormHelperText,
  Box,
  Stack,
  Link
} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { SquareArrowOutUpRight } from 'lucide-react';

export default function ContractDetailsForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.workMode}>
          <FormLabel>Modalidad de Trabajo</FormLabel>
          <Select {...register("workMode")} placeholder="Selecciona una modalidad">
            <option value="remote">Remoto</option>
            <option value="office">Oficina</option>
            <option value="hybrid">Híbrido</option>
          </Select>
          <FormHelperText>Elige cómo será el modo de trabajo para esta posición.</FormHelperText>
          <FormErrorMessage>{errors.workMode?.message?.toString()}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.contractDuration}>
          <FormLabel>Duración del Contrato</FormLabel>
          <Select
            {...register("contractDuration")}
            placeholder="Selecciona la duración del contrato"
          >
            <option value="mensual">Mensual</option>
            <option value="trimestral">Trimestral</option>
            <option value="annual">Anual</option>
            <option value="multianual">Multianual</option>
          </Select>
          <FormHelperText>Indica el período de duración del contrato y de futura renovaciones.</FormHelperText>
          <FormErrorMessage>{errors.contractDuration?.message?.toString()}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.salary}>
          <FormLabel>Salario Ofrecido</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
              $
            </InputLeftElement>
            <Input {...register("salary")} placeholder="Salario Ofrecido" />
          </InputGroup>
          <FormHelperText>Introduce el salario ofrecido en dólares. <Link href='/docs/salarios' color={'red.400'} >visita nuestro apartado de salarios.<Icon as={SquareArrowOutUpRight} /></Link></FormHelperText>
          <FormErrorMessage>{errors.salary?.message?.toString()}</FormErrorMessage>
        </FormControl>
      </Stack>
    </>
  );
};

