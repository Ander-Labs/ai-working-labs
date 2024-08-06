import { create } from "zustand";

interface FormState {
  formValidated: boolean;
  setFormValidated: (validated: boolean) => void;
}

export const useFormStore = create<FormState>((set) => ({
  formValidated: false,
  setFormValidated: (validated: boolean) => set({ formValidated: validated }),
}));
