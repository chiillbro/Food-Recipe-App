import IngredientItem from "./IngredientItem";

export default function IngredientsList({ foodDetail, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        foodDetail.extendedIngredients.map((item) => (
          <IngredientItem item={item} />
        ))
      )}
    </div>
  );
}
