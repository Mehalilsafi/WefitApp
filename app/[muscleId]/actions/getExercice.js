export default async function ( muscleId, feature, difficulty ) {
  console.log("muscle ",muscleId)

  let url = `https://work-out-api1.p.rapidapi.com/search?Muscles=${muscleId}`;

  //if (feature) {
  //  url += `&Equipment=${encodeURIComponent(feature)}`;
  //}

  //if (difficulty) {
  //  url += `&Intensity_Level=${encodeURIComponent(difficulty)}`;
  //}
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
    return data; 
  } catch (error) {
    console.error('Error:', error.message);
    return []; 
  }
}