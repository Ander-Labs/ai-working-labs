import { create } from "zustand";

interface AppState {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

export const useStore = create<AppState>((set) => ({
  prompt: "",
  setPrompt: (prompt) => set({ prompt }),
}));
