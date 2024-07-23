// src/types/JobFormInputs.ts
export interface JobFormInputs {
  companyName: string;
  companyDescription: string;
  country: string;
  category: string;
  role: string;
  subrole: string;
  hasExperience: boolean;
  candidateLevel: string;
  skills: string[];
  workMode: string;
  contractDuration: string;
  salary: string;
  benefits: string[];
}
