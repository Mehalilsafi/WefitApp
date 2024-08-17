
export default async function ({ muscleId, feature, difficulty }) {
  const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscleId}&difficulty=${difficulty}&type=${feature}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Api-Key": "BFeDQxO0KxvGlQycrqBbZ4vNJO0zPBb3CHx08Iqd" },
    });
    if (!response.ok) {
      throw new Error(`responsestatus :${response.status}`);
    }
    const data = await response.json();
    console.log('fuction data log ',data)
  } catch (error) {
    console.log(error.message);
  }

}
