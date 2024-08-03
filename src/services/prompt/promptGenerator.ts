//src/utils/generatePrompt.tsx

export function generatePrompt(data: any): string {
  return `
  Por favor, genera una oferta laboral formal y profesional para un puesto de 
  ${data.role} en ${data.companyName}.
  A continuacion te brindo mas detalles de la oferta:

-Rol: ${data.role} descripción breve del rol teniendo en cuenta el subrol.
-Subrol o Especialidad: ${data.subrole}
-Nivel de Candidato: ${data.candidateLevel}
-Descripción de la empresa: ${data.companyDescription}
-Ubicación del trabajo: El pais de la empresa es ${data.country}.
-Tipo de contrato: La modalidad es ${data.workMode}.
-Duración del contrato: ${data.contractDuration}.
-Salario: ${data.salary} 
(incluyendo cualquier forma de compensación -adicional, como bonos o comisiones)
-Beneficios: ${data.benefits}
-Experiencia:${
    data.hasExperience === true
      ? "Si requiere experiencia Laboral"
      : "no requerir experiecia laboral solo experiencia en el uso de las tecnologias o el puesto"
  }
-Requisitos y habilidades necesarias para el puesto: ${data.skills}
-Información de contacto para la empresa y el gerente de contratación (dejalo como plantilla entre [...])
-La oferta debe ser clara, concisa y respetuosa. Por favor, utiliza un tono profesional y evita cualquier lenguaje discriminatorio o inapropiado.
  `;
}
