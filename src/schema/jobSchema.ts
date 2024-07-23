// src/schema/jobSchema.ts
import * as yup from "yup";

export const jobSchema = yup.object().shape({
  companyName: yup.string().required("Nombre de la empresa es requerido"),
  companyDescription: yup
    .string()
    .required("Descripción de la empresa es requerida"),
  country: yup.string().required("País es requerido"),
  category: yup.string().required("Categoría profesional es requerida"),
  role: yup.string().required("Rol es requerido"),
  subrole: yup.string().required("Subrol o especialidad es requerida"),
  hasExperience: yup
    .boolean()
    .required("Se requiere indicar si se requiere experiencia laboral"),
  candidateLevel: yup.string().required("Nivel del candidato es requerido"),
  skills: yup.array().of(yup.string()).required("Se requieren habilidades"),
  workMode: yup.string().required("Modalidad de trabajo es requerida"),
  contractDuration: yup.string().required("Duración del contrato es requerida"),
  salary: yup.string().required("Salario es requerido"),
  benefits: yup.array().of(yup.string()).required("Beneficios son requeridos"),
});

export type JobFormInputs = yup.InferType<typeof jobSchema>;