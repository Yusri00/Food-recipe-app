import { useParams } from "react-router-dom";

function MealDetails({meals}) {
    const { id } = useParams(); //Hämtar ID från url

    //checks if there is a meal and if it has content. We dont want to see details of a meal that isn't found yet
    if(!meals || meals.length === 0) return null;
    
    //find correct meal on list
    const selectedMeal = meals.find((meal) => meal.idMeal == id);

    // shows error ONLY when meals isn't matched with a recipe 
    if (!selectedMeal) return <p>Recipe could not be found</p>;

    // loops through all ingredients in the array
    const ingredients = [];
    for (let i = 1; i <= 20; i++){
        const measures = selectedMeal[`strMeasure${i}`];
        const ingredient = selectedMeal[`strIngredient${i}`];

        if (measures && ingredient){
            ingredients.push(
                <li key={i}>
                <span className="measures">{measures}</span>
                <span>&nbsp;</span>
                {ingredient}
                </li>
            );
        }
    }

return (  
    <div className="mealDetailsBackground">
        <div className="mealContentBox">
            <h2 className="mealTitle">{selectedMeal.strMeal}</h2>
        <img 
            src = {selectedMeal.strMealThumb}  
            alt={selectedMeal.strMeal} 
            className="mealImage"
        />
        <div className="section">
            <h2 className="ingredientsTitle">Ingredients</h2>
            <ul className="ingredientList">{ingredients}</ul>
        </div>
        
        <div className="section">
            <h2>Instructions</h2>
            <ol className="instructions">
                {selectedMeal.strInstructions
                .split('\r\n')
                .filter(string => string.trim() !== "") //hides empty strings in instructions
                .map((string, index) => (
                    <li key={index}>{string}</li>
                ))}
            </ol>
            </div>
        </div>
    </div>
    );
}
    
export default MealDetails;