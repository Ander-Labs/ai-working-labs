// app/api/chat/route.ts

import { convertToCoreMessages, streamText, StreamData } from "ai";
import { createOpenAI as createGroq } from "@ai-sdk/openai";
import { z } from "zod";
import { generatePrompt } from "@/utils/promptGenerator";

const groq = createGroq({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();


  // Create a stream data object
    const data = new StreamData();
    data.append({ test: "value" });

  const prompt= generatePrompt(data);
  

  const result = await streamText({
    model: groq("llama-3.1-70b-versatile"),
    prompt,
   
    // tools: {
      
    // } ,

    messages: convertToCoreMessages(messages),
    onFinish() {
      data.close();
    },
  });

   return result.toAIStreamResponse({ data });
}
