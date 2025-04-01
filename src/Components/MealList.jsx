import { Link } from "react-router-dom";

const MealInfo = ({meals}) => {
    return (
    <ul>
        {meals.map((mealInfo) => (
        <li key={mealInfo.idMeal}>
            <Link to={`/meal/${mealInfo.idMeal}`}>
            <h3>{mealInfo.strMeal}</h3>
            <img src = {mealInfo.strMealThumb} alt = {mealInfo.strMeal} />
            </Link>
        </li>
        ))}
    </ul>
        );
};

export default MealInfo;