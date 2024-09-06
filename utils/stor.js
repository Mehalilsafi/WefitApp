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
            diets: (state.choice.diets ?? []).includes(item)
              ? (state.choice.diets ?? []).filter((i) => i !== item)
              : [...(state.choice.diets ?? []), item],
          },
        })),

        addAllergies: (item) =>
        set((state) => ({
          choice: {
            ...state.choice,
            allergies: state.choice.allergies.includes(item)
              ? state.choice.allergies.filter((i) => i !== item)
              : [...state.choice.allergies, item],
          },
        })),
      addSearch: (item) =>
        set((state) => ({
          choice: {
            ...state.choice,
            search: state.choice.search.includes(item)
              ? state.choice.search.filter((i) => i !== item)
              : [...state.choice.search, item],
          },
        })),
      addCalories: (item) =>
        set((state) => ({
          choice: {
            ...state.choice,
            calories: (state.choice.calories ?? []).includes(item)
              ? (state.choice.calories ?? []).filter((i) => i !== item)
              : [...(state.choice.calories ?? []), item],
          },
        })),

      addNutrients: (item) =>
        set((state) => ({
          choice: {
            ...state.choice,
            nutrients: state.choice.nutrients.includes(item)
              ? state.choice.nutrients.filter((i) => i !== item)
              : [...state.choice.nutrients, item],
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
