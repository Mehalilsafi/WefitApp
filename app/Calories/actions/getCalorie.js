export default async function () {
  let url = "https://calorie-calculator.p.rapidapi.com/caloriecalculator.php";
  let response = await fetch(url, {
    headers: {
      method: "GET",
      "x-rapidapi-key": "871eab5594msh5b3308f080680c1p154b18jsn6c4e532020d2",
      "x-rapidapi-host": "calorie-calculator.p.rapidapi.com",
    },
  });
  let data = response.json();
  console.log(data)
}
