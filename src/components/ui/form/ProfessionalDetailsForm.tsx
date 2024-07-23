// src/components/ui/form/ProfessionalDetailsForm.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { roles } from "@/data/roles";
import {categories} from '@/data/categories';

export default function ProfessionalDetailsForm() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const selectedCategory = watch("category");
  const selectedRole = watch("role");

  return (
    <>
      <FormControl isInvalid={!!errors.category}>
        <FormLabel>Categoría Profesional</FormLabel>
        <Select
          {...register("category")}
          placeholder="Selecciona una categoría"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormControl>

      {selectedCategory && (
        <FormControl isInvalid={!!errors.role}>
          <FormLabel>Rol</FormLabel>
          <Select {...register("role")} placeholder="Selecciona un rol">
            {roles[selectedCategory].map((role) => (
              <option key={role.name} value={role.name}>
                {role.name}
              </option>
            ))}
          </Select>
        </FormControl>
      )}

      {selectedRole && (
        <FormControl isInvalid={!!errors.subrole}>
          <FormLabel>Subrol o Especialidad</FormLabel>
          <Select {...register("subrole")} placeholder="Selecciona un subrol">
            {roles[selectedCategory]
              .find((role) => role.name === selectedRole)
              ?.subroles.map((subrole) => (
                <option key={subrole} value={subrole}>
                  {subrole}
                </option>
              ))}
          </Select>
        </FormControl>
      )}
    </>
  );
}
