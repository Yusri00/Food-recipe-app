
const MealInfo = ({meals}) => {
    return (
    <ul>
        {meals.map((foodInfo) => (
        <li key={foodInfo.idMeal}>
            <h3>{foodInfo.strMeal}</h3>
            <img src = {foodInfo.strMealThumb} alt = {foodInfo.strMeal} />
            <p>{foodInfo.strInstructions}</p>
        </li>
        ))}
    </ul>
        );
};

export default MealInfo;