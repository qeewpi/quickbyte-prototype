import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function RecipeGrid({ searchedRecipes }) {
  return (
    <Grid>
      {searchedRecipes.map((item) => {
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
  );
}

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

export default RecipeGrid;
