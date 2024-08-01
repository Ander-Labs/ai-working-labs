import { useState } from "react";

export function useAIModel() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchAIResponse(modelType: string, prompt: string) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modelType, prompt }),
      });

      const data = await res.json();
      setResponse(data.text);
    } catch (err) {
      setError("Error fetching AI response");
    } finally {
      setLoading(false);
    }
  }

  return { response, loading, error, fetchAIResponse };
}
