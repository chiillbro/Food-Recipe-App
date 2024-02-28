import styles from "./search.module.css";
import { useEffect, useState } from "react";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9f4b14fba88143d1801efd8c3a703adb";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function FetchFood() {
      const res = await fetch(`${API_URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFoodData(data.results);
    }
    FetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.inputElement}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />
    </div>
  );
}
