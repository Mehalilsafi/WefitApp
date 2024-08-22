import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useDifficulty = create(
  persist(
    (set) => ({
      difficulty: "",
      addDifficulty: (difficultyLevel) => set({ difficulty: difficultyLevel }),
    }),
    {
      name: "difficulty-storage",
    }
  )
);
const useFeature = create(
  persist(
    (set) => ({
      feature: "",
      addFeature: (featureName) => set({ feature: featureName }),
    }),
    {
      name: "feature-storage",
    }
  )
);
export { useDifficulty };
export { useFeature };
