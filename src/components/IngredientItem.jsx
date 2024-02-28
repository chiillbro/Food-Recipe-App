import styles from "./ingredientItem.module.css";
export default function IngredientItem({ item }) {
  return (
    <div>
      <div className={styles.ingredientContainer}>
        <div className={styles.ingredientImage}>
          <img
            className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt=""
          />
        </div>

        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount}
            {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
