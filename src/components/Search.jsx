import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleInput = async (e) => {
    setInput(e.target.value);
    setActive(e.target.value.length > 0);
    const api = await fetch(
      `https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_API_KEY}&query=${e.target.value}`
    );
    const data = await api.json();

    setSuggestions(data);
    console.log(suggestions);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setActive(false);
  };

  const handleBlur = (e) => {
    setActive(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setActive(false);
    }
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={handleInput}
          onFocus={() => setActive(true)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          type="text"
          value={input}
        />
        <Suggestions active={active} input={input} suggestions={suggestions}>
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} onClick={() => setInput(suggestion.title)}>
              {suggestion.title}
            </li>
          ))}
        </Suggestions>
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  position: relative;
  div {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    width: 70%;
    margin: 0 auto;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

const Suggestions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  // change background color based on input
  background: ${(props) =>
    props.active && props.suggestions.length > 0
      ? "linear-gradient(35deg, #494949, #313131)"
      : "transparent"};
  padding: 1rem 0;
  margin-top: 0.5rem;
  list-style: none;
  z-index: 1;
  border-radius: 1rem;
  li {
    // if props is not active, hide the suggestions
    display: ${(props) => (props.active ? "block" : "none")};
    color: grey;
    padding: 1rem 3rem;
    cursor: pointer;
    &:hover {
      background: #eeeeee;
      color: #313131;
      font-weight: bold;
      font-size: 1;
    }
  }
`;

// const Suggestions = styled.ul`
//   list-style: none;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 100%;
//   background-color: white;
//   li {
//     padding: 0.5rem;
//     &:hover {
//       background-color: #f5f5f5;
//     }
//   }
// `;

export default Search;
