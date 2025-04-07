import { Link } from "react-router-dom";

const MealList = ({meals}) => {
    // if (meals.length === 0){
    //     return <p>Recipe could not be found!</p>
    // }//Ändra för att se när man skriver fel ska 
     //Inget recept komma upp. 
    
    return (
    <ul>
        {meals.map((mealList) => (
        <li key={mealList.idMeal}>
            <Link to={`/meal/${mealList.idMeal}`}>
            <h3>{mealList.strMeal}</h3>
            <img src = {mealList.strMealThumb} alt = {mealList.strMeal} />
            </Link>
        </li>
        ))}
    </ul>
        );
};

export default MealList;