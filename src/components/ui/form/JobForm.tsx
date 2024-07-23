// // src/components/ui/form/JobForm.tsx
// "use client";
// import React, { useEffect, useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Textarea,
//   Checkbox,
//   VStack,
// } from "@chakra-ui/react";
// import { getCountries } from "@/services/countryService";
// import { jobSchema } from "@/schema/jobSchema";
// import { JobFormInputs } from "@/types/JobFormInputs";
// import { categories } from "@/data/categories";
// import { roles } from "@/data/roles";
// import { Role } from "@/types/RolType";

// const JobForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     formState: { errors },
//   } = useForm<JobFormInputs>({ resolver: yupResolver(jobSchema) });
//   const [countries, setCountries] = useState<{ name: string; code: string }[]>(
//     []
//   );

//   useEffect(() => {
//     const fetchCountries = async () => {
//       const countriesData = await getCountries();
//       setCountries(countriesData);
//     };
//     fetchCountries();
//   }, []);

//   const [filteredRoles, setFilteredRoles] = useState<Role[]>([]);
//   const [subroles, setSubroles] = useState<string[]>([]);

//   const hasExperience = watch("hasExperience");
//   const selectedCategory = watch("category");
//   const selectedRole = watch("role");

//   useEffect(() => {
//     if (selectedCategory) {
//       setFilteredRoles(roles[selectedCategory] || []);
//     }
//   }, [selectedCategory]);

//   useEffect(() => {
//     if (selectedRole) {
//       const role = filteredRoles.find((role) => role.name === selectedRole);
//       setSubroles(role ? role.subroles : []);
//     }
//   }, [selectedRole, filteredRoles]);

//   const onSubmit = (data: JobFormInputs) => {
//     console.log(data);
//     // Lógica para enviar los datos del formulario
//   };

//   return (
//     <Box as="form" onSubmit={handleSubmit(onSubmit)} p={4}>
//       <VStack spacing={4}>
//         <FormControl isInvalid={!!errors.companyName}>
//           <FormLabel>Nombre de la Empresa</FormLabel>
//           <Input
//             {...register("companyName")}
//             placeholder="Nombre de la Empresa"
//           />
//         </FormControl>
//         <FormControl isInvalid={!!errors.companyDescription}>
//           <FormLabel>A qué se dedica la Empresa</FormLabel>
//           <Textarea
//             {...register("companyDescription")}
//             placeholder="Descripción corta de la Empresa"
//           />
//         </FormControl>
//         <FormControl isInvalid={!!errors.country}>
//           <FormLabel>País</FormLabel>
//           <Select {...register("country")} placeholder="Selecciona un país">

//             {countries.map((country) => (
//               <option key={country.code} value={country.name}>
//                 {country.name}
//               </option>
//             ))}
//           </Select>
//         </FormControl>
//         <FormControl isInvalid={!!errors.category}>
//           <FormLabel>Categoría Profesional</FormLabel>
//           <Select
//             {...register("category")}
//             placeholder="Selecciona una categoría"
//           >
//             {categories.map((category) => (
//               <option key={category.id} value={category.id}>
//                 {category.name}
//               </option>
//             ))}
//           </Select>
//         </FormControl>
//         <FormControl isInvalid={!!errors.role}>
//           <FormLabel>Rol</FormLabel>
//           <Select {...register("role")} placeholder="Selecciona un rol">
//             {filteredRoles.map((role) => (
//               <option key={role.name} value={role.name}>
//                 {role.name}
//               </option>
//             ))}
//           </Select>
//         </FormControl>
//         <FormControl isInvalid={!!errors.subrole}>
//           <FormLabel>Subrol o Especialidad</FormLabel>
//           <Select {...register("subrole")} placeholder="Selecciona un subrol">
//             {subroles.map((subrole) => (
//               <option key={subrole} value={subrole}>
//                 {subrole}
//               </option>
//             ))}
//           </Select>
//         </FormControl>
//         <FormControl isInvalid={!!errors.hasExperience}>
//           <FormLabel>¿Tiene experiencia laboral?</FormLabel>
//           <Checkbox {...register("hasExperience")}>Sí</Checkbox>
//         </FormControl>
//         {hasExperience && (
//           <FormControl isInvalid={!!errors.experienceYears}>
//             <FormLabel>Años de experiencia</FormLabel>
//             <Select
//               {...register("experienceYears")}
//               placeholder="Selecciona los años de experiencia"
//             >
//               <option value="1-3">1-3 años</option>
//               <option value="4-5">4-5 años</option>
//               <option value="6+">6+ años</option>
//             </Select>
//           </FormControl>
//         )}
//         {!hasExperience && (
//           <FormControl isInvalid={!!errors.experienceTechnologies}>
//             <FormLabel>Experiencia en el uso de tecnologías</FormLabel>
//             <Input
//               {...register("experienceTechnologies")}
//               placeholder="Experiencia en el uso de tecnologías"
//             />
//           </FormControl>
//         )}
//         <FormControl isInvalid={!!errors.skills}>
//           <FormLabel>Lo que debe dominar</FormLabel>
//           <Select
//             {...register("skills")}
//             placeholder="Selecciona las habilidades"
//             multiple
//           >
//             <option value="skill1">Habilidad 1</option>
//             <option value="skill2">Habilidad 2</option>
//             {/* Agregar más opciones según sea necesario */}
//           </Select>
//         </FormControl>
//         <FormControl isInvalid={!!errors.workMode}>
//           <FormLabel>Modalidad de Trabajo</FormLabel>
//           <Select
//             {...register("workMode")}
//             placeholder="Selecciona una modalidad"
//           >
//             <option value="remote">Remoto</option>
//             <option value="office">Oficina</option>
//             <option value="hybrid">Híbrido</option>
//           </Select>
//         </FormControl>
//         <FormControl isInvalid={!!errors.contractDuration}>
//           <FormLabel>Duración del Contrato</FormLabel>
//           <Select
//             {...register("contractDuration")}
//             placeholder="Selecciona la duración del contrato"
//           >
//             <option value="1 month">1 mes</option>
//             <option value="3 months">3 meses</option>
//             <option value="6 months">6 meses</option>
//             <option value="1 year">Anual</option>
//           </Select>
//         </FormControl>
//         <FormControl isInvalid={!!errors.salary}>
//           <FormLabel>Salario Ofrecido</FormLabel>
//           <Input
//             {...register("salary")}
//             placeholder="Salario Ofrecido"
//             type="number"
//           />
//         </FormControl>
//         <FormControl isInvalid={!!errors.benefits}>
//           <FormLabel>Beneficios</FormLabel>
//           <Select
//             {...register("benefits")}
//             placeholder="Selecciona los beneficios"
//             multiple
//           >
//             <option value="benefit1">Beneficio 1</option>
//             <option value="benefit2">Beneficio 2</option>
//             {/* Agregar más opciones según sea necesario */}
//           </Select>
//         </FormControl>
//         <Button type="submit" colorScheme="blue">
//           Enviar
//         </Button>
//       </VStack>
//     </Box>
//   );
// };

// export default JobForm;
