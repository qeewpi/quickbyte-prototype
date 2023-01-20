import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function IngredientsSearch() {
  const [ingredients, setIngredients] = useState(Array(10).fill(""));
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let filteredIngredients = ingredients.filter(Boolean);
    const api = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
        process.env.REACT_APP_API_KEY
      }&ingredients=${filteredIngredients.join(",")}&number=10&ranking=2`
    );
    const data = await api.json();
    const recipesWithNoMissingIngredients = data.filter(
      (recipe) => !recipe.missedIngredientCount
    );
    setRecipes(recipesWithNoMissingIngredients);
    navigate("/recipebyingredient", {
      state: {
        recipes: data,
        filteredRecipes: recipesWithNoMissingIngredients,
      },
    });
  };
  return (
    <Wrapper>
      <h3>Search for recipes by ingredients</h3>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Grid>
            {Array.from({ length: 10 }, (_, i) => (
              <label key={i}>
                Ingredient {i + 1}:
                <input
                  type="text"
                  value={ingredients[i]}
                  onChange={(e) =>
                    setIngredients((prevIngredients) => {
                      prevIngredients[i] = e.target.value;
                      return [...prevIngredients];
                    })
                  }
                />
              </label>
            ))}
          </Grid>
          <ButtonWrapper>
            <Button type="submit">Search</Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  margin-top: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  // only in the center
  justify-content: center;
`;

const Form = styled.form`
  font-size: 1.25rem;
  // form boxes larger
  input {
    font-size: 1.25rem;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #f5f5f5;
    color: #000;
  }
  // display in grid in the center of the page
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  // margin between each label and input
  label {
    color: #313131;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  // display button separately
  button {
    // opposite color
    background-color: #313131;
    color: #fff;
    margin-top: 2rem;
  }
`;

// style button aligned to size of input boxes
const Button = styled.button`
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #f5f5f5;
  color: #000;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

// display button separately from form
const ButtonWrapper = styled.div`
  display: flex;
`;

export default IngredientsSearch;
