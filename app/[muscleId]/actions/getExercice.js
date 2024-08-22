export default async function ({ muscleId, feature, difficulty }) {
  const url = `https://work-out-api1.p.rapidapi.com/search?Muscles=${biceps}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers:{
        'x-rapidapi-host':'work-out-api1.p.rapidapi.com',
        'x-rapidapi-key': '871eab5594msh5b3308f080680c1p154b18jsn6c4e532020d2'
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
   
    const data = await response.json();
    console.log('Function data log:', data);
    return data; // Return the data from the function
  } catch (error) {
    console.error('Error:', error.message);
    return []; // Return an empty array in case of error
  }
}