import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function IngredientsSearch() {
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");
  const [ingredient6, setIngredient6] = useState("");
  const [ingredient7, setIngredient7] = useState("");
  const [ingredient8, setIngredient8] = useState("");
  const [ingredient9, setIngredient9] = useState("");
  const [ingredient10, setIngredient10] = useState("");

  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ingredients = [
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6,
      ingredient7,
      ingredient8,
      ingredient9,
      ingredient10,
    ];
    // remove empty strings from ingredients array
    ingredients = ingredients.filter(Boolean);
    const api = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
        process.env.REACT_APP_API_KEY
      }&ingredients=${ingredients.join(",")}&number=20&ranking=2`
    );

    const data = await api.json();

    const recipesWithNoMissingIngredients = data.filter(
      (recipe) => !recipe.missedIngredientCount
    );

    console.log(data);

    setRecipes(recipesWithNoMissingIngredients);
    console.log(recipesWithNoMissingIngredients);

    navigate("/recipebyingredient", {
      state: {
        recipes: data,
        filteredRecipes: recipesWithNoMissingIngredients,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingredient 1:
        <input
          type="text"
          value={ingredient1}
          onChange={(e) => setIngredient1(e.target.value)}
        />
      </label>
      <label>
        Ingredient 2:
        <input
          type="text"
          value={ingredient2}
          onChange={(e) => setIngredient2(e.target.value)}
        />
      </label>
      <label>
        Ingredient 3:
        <input
          type="text"
          value={ingredient3}
          onChange={(e) => setIngredient3(e.target.value)}
        />
      </label>
      <label>
        Ingredient 4:
        <input
          type="text"
          value={ingredient4}
          onChange={(e) => setIngredient4(e.target.value)}
        />
      </label>
      <label>
        Ingredient 5:
        <input
          type="text"
          value={ingredient5}
          onChange={(e) => setIngredient5(e.target.value)}
        />
      </label>
      <label>
        Ingredient 6:
        <input
          type="text"
          value={ingredient6}
          onChange={(e) => setIngredient6(e.target.value)}
        />
      </label>
      <label>
        Ingredient 7:
        <input
          type="text"
          value={ingredient7}
          onChange={(e) => setIngredient7(e.target.value)}
        />
      </label>
      <label>
        Ingredient 8:
        <input
          type="text"
          value={ingredient8}
          onChange={(e) => setIngredient8(e.target.value)}
        />
      </label>
      <label>
        Ingredient 9:
        <input
          type="text"
          value={ingredient9}
          onChange={(e) => setIngredient9(e.target.value)}
        />
      </label>
      <label>
        Ingredient 10:
        <input
          type="text"
          value={ingredient10}
          onChange={(e) => setIngredient10(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default IngredientsSearch;
