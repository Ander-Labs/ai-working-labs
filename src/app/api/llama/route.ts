// app/api/llama/route.ts

import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const model = groq("llama-3.1-70b-versatile");

  const result = await streamText({
    model,
    messages,
    maxTokens: 1000,
    temperature: 0.5,
    topP: 1,
    frequencyPenalty: 1,
  });

  return result.toAIStreamResponse();
}

// export function generatePrompt(data: any): string {
//   return `Genera una oferta laboral para una empresa llamada ${
//     data.companyName
//   } que se dedica a ${data.companyDescription}, en ${data.country}.
//   Estamos  en búsqueda de un profesional para el puesto de ${
//     data.role
//   }, en la categoría de ${data.category}, con especialización en ${
//     data.subrole
//   }.
//   El candidato ideal ${
//     data.hasExperience ? "deberá tener" : "no requerir"
//   } experiencia laboral previa. Buscamos a alguien con un nivel de ${
//     data.candidateLevel
//   } Las habilidades clave necesarias para este puesto son: ${data.skills}.
//   La modalidad de trabajo será${
//     data.workMode
//   } y el contrato tendrá una duración de ${data.contractDuration}.
//   El salario ofrecido es de $ ${
//     data.salary
//   } y los beneficios que ofrecemos incluyen: ${data.benefits}.

//   ¿Puedes generar una oferta laboral atractiva y detallada para este puesto?`;
// }
