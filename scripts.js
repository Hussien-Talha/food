async function getRecipes() {
    const fridgeInput = document.getElementById("fridge-items").value;
    const appId = '888b9df4';
    const appKey = 'c90af8890c556d720e9f22f6989957cb';
    const apiUrl = `https://api.edamam.com/search?q=${fridgeInput}&app_id=${appId}&app_key=${appKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const recipeList = document.getElementById("recipe-list");
        recipeList.innerHTML = "<h2>Recipes:</h2>";

        if (data.hits && data.hits.length > 0) {
            data.hits.forEach(hit => {
                const recipeItem = document.createElement("p");
                recipeItem.textContent = hit.recipe.label;
                recipeList.appendChild(recipeItem);
            });
        } else {
            const errorItem = document.createElement("p");
            errorItem.textContent = "No recipes found. Try different ingredients.";
            recipeList.appendChild(errorItem);
        }
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

