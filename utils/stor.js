import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useDifficulty = create(
  persist((set) => ({
    difficulty: "",
    addDifficulty: (difficultyLevel) =>
      set((state) => ({ difficulty: difficultyLevel })),
  }))
);
const useFeature = create(
  persist((set) => ({
    feature: "",
    addFeature: (featureName) => set((state) => ({ feature: featureName })),
  }))
);
export { useDifficulty };
export { useFeature };
