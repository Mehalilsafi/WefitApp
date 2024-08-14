"use server";
export default async function ({ muscleId, feature, difficulty }) {
  const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscleId}&difficulty=${difficulty}&equipment=${feature}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Api-Key": "BFeDQxO0KxvGlQycrqBbZ4vNJO0zPBb3CHx08Iqd" },
    });
    if (!response.ok) {
      throw new Error(`responsestatus :${response.status}`);
    }
    const data = await response.json();
  } catch (error) {
    console.log(error.message);
  }
}
