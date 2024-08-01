// src/services/generate-job.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { streamObject } from 'ai';
import { jobSchema } from '@/schema/jobSchema';

export const maxDuration = 30;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const context = await req.json();
  const validation = jobSchema.safeParse(context);

  if (!validation.success) {
    return res.status(400).json({ errors: validation.error.errors });
  }

  const result = await streamObject({
    model: 'openai', // Cambia esto según tu configuración
    schema: jobSchema,
    prompt: `Crea una oferta de trabajo profesional y realista basada en estos datos: ${JSON.stringify(context)}`,
  });

  return result.toTextStreamResponse();
}
