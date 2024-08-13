import { create } from "zustand";

const useDifficulty = create((set) => ({
  difficulty: "",
  addDifficulty: (difficultyLevel) =>
    set((state) => ({ difficulty: difficultyLevel })),
}));
const useFeature = create((set) => ({
  feature: "",
  addFeature: (featureName) =>
    set((state) => ({ feature: featureName })),
}));
export { useDifficulty };
export {useFeature}
