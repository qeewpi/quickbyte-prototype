import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function RecipeGrid() {
  const { state } = useLocation();
  const { recipes, filteredRecipes } = state;

  return (
    <div>
      {recipes.length > 0 ? (
        <>
          <h3>Recipes</h3>
          <Grid1>
            {recipes.map((item) => {
              return (
                <Card key={item.id}>
                  <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                  </Link>
                </Card>
              );
            })}
          </Grid1>
        </>
      ) : null}

      {filteredRecipes.length > 0 ? (
        <>
          <h3>Filtered Recipes</h3>
          <Grid2>
            {filteredRecipes.map((item) => {
              return (
                <Card key={item.id}>
                  <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                  </Link>
                </Card>
              );
            })}
          </Grid2>
        </>
      ) : null}
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Grid1 = styled(Grid)``;
const Grid2 = styled(Grid)``;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default RecipeGrid;
