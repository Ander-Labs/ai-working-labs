// src/components/ui/form/ContractDetailsForm.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  InputLeftElement,
  InputGroup,
  FormErrorMessage,
} from "@chakra-ui/react";

const ContractDetailsForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormControl isInvalid={!!errors.workMode}>
        <FormLabel>Modalidad de Trabajo</FormLabel>
        <Select
          {...register("workMode")}
          placeholder="Selecciona una modalidad"
        >
          <option value="remote">Remoto</option>
          <option value="office">Oficina</option>
          <option value="hybrid">Híbrido</option>
        </Select>
        <FormErrorMessage>
          {errors.workMode?.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.contractDuration}>
        <FormLabel>Duración del Contrato</FormLabel>
        <Select
          {...register("contractDuration")}
          placeholder="Selecciona la duración del contrato"
        >
          <option value="1-month">1 mes</option>
          <option value="3-months">3 meses</option>
          <option value="6-months">6 meses</option>
          <option value="annual">Anual</option>
        </Select>
        <FormErrorMessage>
          {errors.contractDuration?.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.salary}>
        <FormLabel>Salario Ofrecido</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            $
          </InputLeftElement>
          <Input {...register("salary")} placeholder="Salario Ofrecido" />
        </InputGroup>
        <FormErrorMessage>
          {errors.salary?.message?.toString()}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};

export default ContractDetailsForm;
