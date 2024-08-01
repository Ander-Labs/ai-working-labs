//src/app/page.tsx
import FormJob from "@/components/ui/form/FormJob";
import ChatLlama from "@/components/ui/ai/ChatLlama";

export default function Home() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">Welcome Working Labs</h2>
      <FormJob />
      {/* <ChatAI /> */}
      {/* <Gemini15Flash /> */}
      <ChatLlama />
    </>
  );
}
