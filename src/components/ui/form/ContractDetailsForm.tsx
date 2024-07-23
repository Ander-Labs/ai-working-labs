// src/components/ui/form/ContractDetailsForm.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormLabel, Select, Input } from "@chakra-ui/react";

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
      </FormControl>
      <FormControl isInvalid={!!errors.salary}>
        <FormLabel>Salario Ofrecido</FormLabel>
        <Input {...register("salary")} placeholder="Salario Ofrecido" />
      </FormControl>
    </>
  );
};

export default ContractDetailsForm;
