// src/config/aiModels.ts
export interface AIType {
  [key: string]: {
    apiKey: string;
    endpoint: string;
  };
}

export const aiModels: AIType = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY || "",
    // endpoint: "/api/openai",
    endpoint: "https://api.openai.com/v1/completions",
  },
  gemini: {
    apiKey: process.env.GEMINI_API_KEY || "",
    endpoint: "/api/gemini",
  },
  groq: {
    apiKey: process.env.GROQ_API_KEY || "",
    endpoint: "/api/llama",
  },
};
