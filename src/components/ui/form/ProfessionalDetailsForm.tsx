// src/components/ui/form/ProfessionalDetailsForm.tsx
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  FormHelperText,
  Stack,
} from "@chakra-ui/react";
import { roles } from "@/data/roles";
import { categories } from "@/data/categories";

export default function ProfessionalDetailsForm() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const selectedCategory = watch("category");
  const selectedRole = watch("role");

  return (
    <Stack spacing={4}>
      <FormControl isInvalid={!!errors.category}>
        <FormLabel>Categoría Profesional</FormLabel>
        <Select {...register("category")} placeholder="Selecciona una categoría">
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
        <FormHelperText>Selecciona la categoría que mejor describe tu área profesional.</FormHelperText>
        <FormErrorMessage>{errors.category?.message?.toString()}</FormErrorMessage>
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
          <FormHelperText>Selecciona el rol específico dentro de la categoría seleccionada.</FormHelperText>
          <FormErrorMessage>{errors.role?.message?.toString()}</FormErrorMessage>
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
          <FormHelperText>Selecciona la especialidad específica dentro del rol seleccionado.</FormHelperText>
          <FormErrorMessage>{errors.subrole?.message?.toString()}</FormErrorMessage>
        </FormControl>
      )}
    </Stack>
  );
}
