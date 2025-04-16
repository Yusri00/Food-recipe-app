import { useParams } from "react-router-dom";

function MealDetails({meals}) {
    const { id } = useParams(); //Hämtar ID från url

    //Kollar om meal finns och har innehåll. Vi vill inte se detaljer för måltid som inte finns ännu.
    if(!meals || meals.length === 0) return null;
    
    //Hitta rätt maträtt i listan
    const selectedMeal = meals.find((meal) => meal.idMeal == id);

    // Visar error BARA när meals utan matchning med recept
    if (!selectedMeal) return <p>Recipe could not be found</p>;

    //Loopa igenom alla ingredienser i arrayen
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
                {selectedMeal.strInstructions.split('\r\n').map((string, index) => (
                    <li key={index}>{string}</li>
                ))}
            </ol>
            </div>
        </div>
    </div>
    );
}
    
export default MealDetails;