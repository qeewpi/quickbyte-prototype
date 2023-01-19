import RecipeGrid from "../components/RecipeGrid";

function RecipeResults({ location }) {
  const recipes = location?.state?.recipes || [];

  return (
    <div>
      <RecipeGrid recipes={recipes} />
    </div>
  );
}

export default RecipeResults;
