//src/utils/generatePrompt.tsx

export function generatePrompt(data: any): string {

  return `
  Porfavor crea una oferta laboral atractiva, con una estructura detallada y bien ordenada, usando los datos anterirormente proporcionados
  Crea una oferta laboral para la empresa de nombre ${
    data.companyName
  } que se dedica a ${data.companyDescription}, en ${data.country}.
  Estamos  en búsqueda de un profesional para el puesto de ${
    data.role
  }, en la categoría de ${data.category}, con especialización en ${
    data.subrole
  }.
  El candidato ideal ${
    data.hasExperience ? "deberá tener" : "no requerir"
  } experiencia laboral previa. Buscamos a alguien con un nivel de ${
    data.candidateLevel
  } Las habilidades clave necesarias para este puesto son: ${data.skills}.
  La modalidad de trabajo será${
    data.workMode
  } y el contrato tendrá una duración y o renovacion de ${data.contractDuration}.
  El salario ofrecido es de $ ${
    data.salary
  } y los beneficios que ofrecemos incluyen: ${data.benefits}.
  
  `;
}

// Prompt:

// "Por favor, genera una oferta laboral formal y profesional para un puesto de [nombre del puesto] en [nombre de la empresa]. La oferta debe incluir los siguientes detalles:

// Título del puesto y descripción breve del rol
// Nombre y cargo del gerente o supervisor directo
// Ubicación del trabajo (ciudad, estado/provincia, país)
// Tipo de contrato (tiempo completo, tiempo parcial, contrato temporal, etc.)
// Duración del contrato (si aplica)
// Salario y beneficios (incluyendo cualquier forma de compensación adicional, como bonos o comisiones)
// Horario de trabajo y expectativas de disponibilidad
// Requisitos y habilidades necesarias para el puesto
// Proceso de selección y fecha límite para la presentación de solicitudes
// Información de contacto para la empresa y el gerente de contratación
// La oferta debe ser clara, concisa y respetuosa, y debe seguir las normas y regulaciones laborales aplicables en [país/estado/provincia]. Por favor, utiliza un tono profesional y evita cualquier lenguaje discriminatorio o inapropiado.

// Detalles adicionales:

// [Incluye cualquier información adicional que desees que se incluya en la oferta, como beneficios adicionales, oportunidades de crecimiento o requisitos específicos para el puesto]
// Formato:

// La oferta debe estar escrita en [idioma] y debe seguir un formato estándar de carta comercial.
// Por favor, utiliza un tamaño de fuente legible (al menos 10 puntos) y un estilo de fuente profesional (como Arial, Calibri o Times New Roman).
// Ejemplo de respuesta:

// [El modelo de IA debe generar una oferta laboral que cumpla con los requisitos y detalles proporcionados en el prompt]"

// Nota:

// Asegúrate de personalizar el prompt según las necesidades específicas de tu empresa y el puesto que estás ofreciendo.
// Es importante revisar y editar la oferta generada por el modelo de IA para asegurarte de que cumple con las normas y regulaciones laborales aplicables y que se ajusta a las necesidades de tu empresa.

