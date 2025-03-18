
const SearchList = ({ meals }) => {
    return (
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    );
  };
  
  export default SearchList;