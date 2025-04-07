import { useParams } from "react-router-dom";

function MealDetails({meals}) {
    const { id } = useParams(); //Hämtar ID från url

    //Finns det ingen meal, visas ingen error(recipe not found undviks) 
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
            ingredients.push(`${measures} ${ingredient}`);
        } 
    }

    // Annars....    
    return (  
    <div>
        <h2>{selectedMeal.strMeal}</h2>
        <img src = {selectedMeal.strMealThumb}  alt={selectedMeal.strMeal} />
        
        <h2>Ingredients:</h2>
    <ul>
        {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
        ))}
    </ul>
    
        <h2>Instructions:</h2>
        <p>{selectedMeal.strInstructions}</p>
    </div>
        );
}
    
export default MealDetails;