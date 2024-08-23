export function calculateBMR(gender, weight, height, age) {
  let BMR;

  if (gender === "male") {
    BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else if (gender === "female") {
    BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  return BMR;
}
 export function calculateDailyCalories(BMR, activityLevel, goal) {
  let multiplier;

  switch (activityLevel) {
    case "sedentary":
      multiplier = 1.2;
      break;
    case "light":
      multiplier = 1.375;
      break;
    case "moderate":
      multiplier = 1.55;
      break;
    case "active":
      multiplier = 1.725;
      break;
    case "very active":
      multiplier = 1.9;
      break;
    default:
      multiplier = 1.2;
  }
  let dailyCalories = BMR * multiplier;
  if (goal === "lose") {
    dailyCalories -= 500;
  } else if (goal === "gain") {
    dailyCalories += 500;
  }
  return dailyCalories;
}
