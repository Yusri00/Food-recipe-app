import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './components/Search.jsx'
import MealList from './components/MealList.jsx'
import MealDetails from './components/MealDetails.jsx'
import './App.css'

function App() {
  const [searchForFood, setFood] = useState(""); // Söktexten från input
  const [meals, setMeals] = useState([]);// Här lagras API-resultaten
  const [errorMessage, setErrorMessage] = useState("");

  // Anropa fetchFood inuti useEffect
  useEffect(() => {
    if (searchForFood.trim() === "") return;
    fetchFood(setErrorMessage);
  }, [searchForFood]); // körs varje gång searchForFood ändras 
      
  const fetchFood = (setErrorMessage) => {    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchForFood}`)
      .then(response => response.json())
      .then(data => {
        console.log("API response:", data); 
        if (data.meals) {
          setMeals(data.meals);
          setErrorMessage(""); // Inga fel, så vi rensar felmeddelandet
        } else {
          setMeals([]); // Om ingen maträtt hittas, töms listan
          setErrorMessage("Recipe could not be found");
        }
      })
      .catch(error => {
        console.error("Error fetching data", error);
        setErrorMessage("Something went wrong");
      });
  };
  
    const handleReset = () => {
      setMeals([]);
      setFood("");
    };

  return (
    <Router>
      <Link to= "/" onClick={handleReset}><h1>Food Recipes</h1></Link>
      <Routes>
         {/* Startsidan med sökning */}
        <Route
          path="/"
          element={
            <div> 
              <Search setFood={setFood} 
              fetchFood={fetchFood}
              errorMessage= {errorMessage}/>
              <MealList meals={meals}/>
              </div>
            }
          />

         {/* Sidan för att visa detaljer om en måltid */}
        <Route path="/meal/:id" element={<MealDetails meals={meals} />} />
      </Routes>
    </Router>
  );
}

export default App;
