// src/schema/jobSchema.ts
import * as yup from "yup";

export const jobSchema = yup.object().shape({
  companyName: yup.string().required("El Nombre de la empresa es requerido"),
  companyDescription: yup
    .string()
    .required("La Descripción de la empresa es requerida"),
  country: yup.string().required("El País es requerido"),
  category: yup.string().required("La Categoría profesional es requerida"),
  role: yup.string().required("El Rol es requerido"),
  subrole: yup.string().required("El Subrol o especialidad es requerida"),
  hasExperience: yup
    .boolean()
    .required("Se requiere indicar si se requiere experiencia laboral"),
  candidateLevel: yup.string().required("El Nivel del candidato es requerido"),
  skills: yup.string().required("Se requieren habilidades"),
  workMode: yup.string().required("La Modalidad de trabajo es requerida"),
  contractDuration: yup
    .string()
    .required("La Duración del contrato es requerida"),
  salary: yup.string().required("El Salario es requerido"),
  benefits: yup.string().required("Los Beneficios son requeridos"),
});

export type JobFormInputs = yup.InferType<typeof jobSchema>;
