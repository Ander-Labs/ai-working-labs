// src/components/ui/form/CompanyInfoForm.tsx
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  FormHelperText,
  Box,
  Stack,
} from "@chakra-ui/react";
import { getCountries } from "@/services/country/countryService";

export default function CompanyInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [countries, setCountries] = useState<{ name: string; code: string }[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesData = await getCountries();
      setCountries(countriesData);
    };
    fetchCountries();
  }, []);

  return (
    <Stack spacing={4}>
      <FormControl isInvalid={!!errors.companyName}>
        <FormLabel>Nombre de la Empresa</FormLabel>
        <Input {...register("companyName")} placeholder="Nombre de la Empresa" />
        <FormHelperText>Introduce el nombre completo de tu empresa.</FormHelperText>
        <FormErrorMessage>{errors.companyName?.message?.toString()}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.companyDescription}>
        <FormLabel>A qué se dedica la Empresa</FormLabel>
        <Textarea
          {...register("companyDescription")}
          placeholder="Descripción corta de la Empresa"
        />
        <FormHelperText>Proporciona una breve descripción de las actividades de tu empresa.</FormHelperText>
        <FormErrorMessage>{errors.companyDescription?.message?.toString()}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.country}>
        <FormLabel>País</FormLabel>
        <Select {...register("country")} placeholder="Selecciona el país de tu empresa">
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </Select>
        <FormHelperText>Selecciona el país donde se encuentra tu empresa.</FormHelperText>
        <FormErrorMessage>{errors.country?.message?.toString()}</FormErrorMessage>
      </FormControl>
    </Stack>
  );
}
