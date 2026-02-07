import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Character } from "../schemas/character";
import { baseTemplate } from "../template";

/**
 * LAL DIVANE - FORGE STORE
 * Centralized state management for character creation.
 */

interface ForgeState {
  // Data
  template: Character;
  
  // UI State
  activeStep: number;
  isDirty: boolean;
  
  // Actions
  setTemplate: (update: Partial<Character> | ((prev: Character) => Character)) => void;
  updatePath: (path: string, value: any) => void;
  setStep: (step: number) => void;
  reset: () => void;
}

export const useForgeStore = create<ForgeState>()(
  persist(
    (set, get) => ({
      template: baseTemplate as Character,
      activeStep: 0,
      isDirty: false,

      setTemplate: (update) => {
        set((state) => {
          const nextTemplate = typeof update === "function" ? update(state.template) : { ...state.template, ...update };
          return { 
            template: nextTemplate,
            isDirty: true 
          };
        });
      },

      updatePath: (path, value) => {
        set((state) => {
          const newTemplate = { ...state.template };
          const keys = path.split(".");
          let current: any = newTemplate;
          for (let i = 0; i < keys.length - 1; i++) {
            // Auto-create missing objects
            if (!current[keys[i]]) {
              current[keys[i]] = {};
            }
            current = current[keys[i]];
          }
          current[keys[keys.length - 1]] = value;
          return { template: newTemplate, isDirty: true };
        });
      },

      setStep: (step) => set({ activeStep: step }),

      reset: () => set({ template: baseTemplate as Character, isDirty: false, activeStep: 0 }),
    }),
    {
      name: "lal-forge-storage",
    }
  )
);
