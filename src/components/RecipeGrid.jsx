import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function RecipeGrid() {
  const { state } = useLocation();
  const { recipes, filteredRecipes } = state;

  return (
    <div>
      <h2>Recipes</h2>
      <Grid>
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
      </Grid>

      <h2>Filtered Recipes</h2>
      <Grid>
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
      </Grid>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }

  h4 {
    margin: 1rem 0;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default RecipeGrid;
