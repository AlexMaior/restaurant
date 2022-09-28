import React, { useEffect, useState } from "react";

const Menu = () => {
  const [results, setResults] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=sushi";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResults(data.meals));
  }, []);

  console.log(results);

  return (
    <div>
      {results.map((result) => (
        <p key={result.idMeal}>{result.idMeal}</p>
      ))}
    </div>
  );
};

export default Menu;
