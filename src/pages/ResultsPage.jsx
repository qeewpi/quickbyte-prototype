import { useLocation } from "react-router-dom";
import RecipeGrid from "../components/RecipeGrid";

function ResultsPage() {
  const location = useLocation();
  const searchedRecipes = location.state.data;

  return (
    <div>
      <RecipeGrid searchedRecipes={searchedRecipes} />
    </div>
  );
}
