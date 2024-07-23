// src/components/ui/form/CompanyInfoForm.tsx
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { getCountries } from "@/services/countryService";

export default function CompanyInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [countries, setCountries] = useState<{ name: string; code: string }[]>(
    []
  );

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesData = await getCountries();
      setCountries(countriesData);
    };
    fetchCountries();
  }, []);

  return (
    <>
      <FormControl isInvalid={!!errors.companyName}>
        <FormLabel>Nombre de la Empresa</FormLabel>
        <Input
          {...register("companyName")}
          placeholder="Nombre de la Empresa"
        />
      </FormControl>
      <FormControl isInvalid={!!errors.companyDescription}>
        <FormLabel>A qué se dedica la Empresa</FormLabel>
        <Textarea
          {...register("companyDescription")}
          placeholder="Descripción corta de la Empresa"
        />
      </FormControl>
      <FormControl isInvalid={!!errors.country}>
        <FormLabel>País</FormLabel>
        <Select
          {...register("country")}
          placeholder="Selecciona el pais de tu empresa"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
