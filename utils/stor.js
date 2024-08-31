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
const useStor=create(
  persist(
    (set) => ({
      choice: {
        
      },
      addChoice: () => set({ }),
    }),
    {
      name:"choice-storage"
    }
  )
)
export{useStor}
export { useDifficulty };
export { useFeature };
