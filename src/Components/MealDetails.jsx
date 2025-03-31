import { useParams } from "react-router-dom";

// const MealDetails = ({ meals }) => {
//     return (
//       <ul>
//         {meals.map((foodInfoDetails) => (
//           <li key={foodInfoDetails.idMeal}>
//             <h2>{foodInfoDetails.strMeal}</h2>
//             <img src={foodInfoDetails.strMealThumb} alt={foodInfoDetails.strMeal} />
//             <h4>{foodInfoDetails.strInstructions}</h4>
//             <h4>{foodInfoDetails.strIngredient1}</h4>
//             <h4>{foodInfoDetails.strIngredient2}</h4>
//             <h4>{foodInfoDetails.strIngredient3}</h4>
//             <h4>{foodInfoDetails.strIngredient4}</h4>
//             <h4>{foodInfoDetails.strIngredient5}</h4>
//             <h4>{foodInfoDetails.strIngredient6}</h4>
//             <h4>{foodInfoDetails.strIngredient7}</h4>
//             <h4>{foodInfoDetails.strIngredient8}</h4>
//             <h4>{foodInfoDetails.strIngredient9}</h4>
//           </li>
//         ))}
//       </ul>
//     );
//   };
//Ändra

function MealDetails({meals}) {

    const { id } = useParams(); //Hämtar ID från url
    console.log("ID från URL:", id);
    console.log("Alla måltider:", meals); //Tom
    //Hitta rätt maträtt i listan
    const selectedMeal = meals.find((meal) => meal.idMeal == id);
    


    // Om måltiden inte finns, visa ett meddelande
    if (!selectedMeal) return <p>Recipe could not be found</p>;

    // Annars....    
    return (  
    <div>
        <h2>{selectedMeal.strMeal}</h2>
        <img src = {selectedMeal.strMealThumb} />
        <p>{selectedMeal.strInstructions}</p>
        <p>{selectedMeal.strIngredients1}</p>
    </div>
        );
}

export default MealDetails;