export async function meals() {
    const url =
      "https://api.edamam.com/api/recipes/v2?type=public&q=banana&app_id=007b8c18&app_key=fee7bec055c45a5e9695619e9aa766ea&diet=high-protein&health=alcohol-free&cuisineType=American&mealType=Breakfast";
    
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Accept-Language": "en",
        },
      });
  
      const data = await response.json();
      return data;  
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;  
    }
  }
  
  
