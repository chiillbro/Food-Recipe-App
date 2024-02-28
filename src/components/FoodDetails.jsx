import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import IngredientsList from "./IngredientsList";

export default function FoodDetails({ foodId }) {
  const [foodDetail, setFoodDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "9f4b14fba88143d1801efd8c3a703adb";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodDetail(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{foodDetail.title}</h1>

        <img className={styles.recipeImage} src={foodDetail.image} alt="" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️{foodDetail.timeInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦<strong>Serves {foodDetail.servings}</strong>
          </span>
          <span>
            <strong>
              {foodDetail.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{foodDetail.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲
          <span>
            <strong> {foodDetail.pricePerServing / 100} per serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <IngredientsList foodDetail={foodDetail} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              foodDetail.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
