import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STEP_IDS, CHECK_IDS, type StepId } from "./guide-data";

export type Theme = "light" | "dark";

type ProgressState = {
  completed: Record<string, boolean>;
  checks: Record<string, boolean>;
  theme: Theme;
  toggleStep: (id: StepId) => void;
  setStepDone: (id: StepId, done: boolean) => void;
  toggleCheck: (id: string) => void;
  setTheme: (theme: Theme) => void;
  reset: () => void;
};

const emptyCompleted = () =>
  Object.fromEntries(STEP_IDS.map((id) => [id, false])) as Record<string, boolean>;
const emptyChecks = () =>
  Object.fromEntries(CHECK_IDS.map((id) => [id, false])) as Record<string, boolean>;

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      completed: emptyCompleted(),
      checks: emptyChecks(),
      theme: "light",
      toggleStep: (id) => {
        set({ completed: { ...get().completed, [id]: !get().completed[id] } });
      },
      setStepDone: (id, done) => {
        set({ completed: { ...get().completed, [id]: done } });
      },
      toggleCheck: (id) => {
        set({ checks: { ...get().checks, [id]: !get().checks[id] } });
      },
      setTheme: (theme) => {
        applyTheme(theme);
        set({ theme });
      },
      reset: () => {
        set({ completed: emptyCompleted(), checks: emptyChecks() });
      },
    }),
    {
      name: "compiler-desk-progress-v1",
      skipHydration: true,
    },
  ),
);
