async function loadRecipe(query = "") {
  let response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);

  let data = await response.json();
  let innerHTML = "";
  data.recipes.forEach((recipe) => {
    innerHTML += `<div class="recipe-card">
                        <img src="${recipe.image}"/>
                      <h2>${recipe.name}</h2>
                        <ul>
                          ${recipe.ingredients
                            .map((ingredient) => `<li>${ingredient}</li>`)
                            .join("")}
                        </ul>
                     </div>`;
  });
  document.getElementById("recipes-container").innerHTML = innerHTML;
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
  const query = document.getElementById("search-input").value.trim();
  loadRecipe(query);
});

loadRecipe();
