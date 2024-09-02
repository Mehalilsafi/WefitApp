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
const useStore = create(
  persist(
    (set) => ({
      choice: {
        diets: [],
        allergies: [],
        search: [],
        calories: [],
        nutrients: [],
      },
      addDiets: (item) =>
        set((state) => ({
          choice: {
            ...state.choice,
            diets: state.choice.diets.includes(item)
              ? state.choice.diets.filter((i) => i !== item)
              : [...state.choice.diets, item],
          },
        })),
    }),
    {
      name: "choice-storage",
    }
  )
);
export { useStore };
export { useDifficulty };
export { useFeature };
