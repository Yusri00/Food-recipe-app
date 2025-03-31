import { Link } from "react-router-dom";

const MealInfo = ({meals}) => {
    return (
    <ul>
        {meals.map((foodInfo) => (
        <li key={foodInfo.idMeal}>
            <Link to={`/meal/${foodInfo.idMeal}`}>
            <h3>{foodInfo.strMeal}</h3>
            <img src = {foodInfo.strMealThumb} alt = {foodInfo.strMeal} />
            </Link>
        </li>
        ))}
    </ul>
        );
};

export default MealInfo;