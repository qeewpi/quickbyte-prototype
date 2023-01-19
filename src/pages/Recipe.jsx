import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loading from "react-loading";

import React from "react";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState();
  const [activeTab, setActiveTab] = useState("instructions");
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    if (isMounted) {
      setDetails(detailData);
      console.log(detailData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    fetchDetails();
    return () => {
      setIsMounted(false);
    };
  }, [params.name]);

  return (
    <div>
      {isLoading ? (
        <LoadingContainer>
          <Loading type="spin" color="#000000" height={50} width={50} />
        </LoadingContainer>
      ) : (
        <div>
          {" "}
          <DetailWrapper>
            <div>
              <h2>{details.title}</h2>
              <img src={details.image} alt="" />
            </div>
            <Info>
              <Button
                className={activeTab === "instructions" ? "active" : ""}
                onClick={() => setActiveTab("instructions")}
              >
                Instructions
              </Button>
              <Button
                className={activeTab === "ingredients" ? "active" : ""}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </Button>
              {activeTab === "instructions" && (
                <div>
                  <h3
                    dangerouslySetInnerHTML={{ __html: details.summary }}
                  ></h3>
                  <h3
                    dangerouslySetInnerHTML={{ __html: details.instructions }}
                  ></h3>
                </div>
              )}
              {activeTab === "ingredients" && (
                <ul>
                  {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              )}
            </Info>
          </DetailWrapper>
        </div>
      )}
    </div>
  );
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 2.5 rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    border-radius: 2rem;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export default Recipe;
