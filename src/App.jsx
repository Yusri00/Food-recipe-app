import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './components/Search.jsx'
import MealList from './components/MealList.jsx'
import MealDetails from './components/MealDetails.jsx'
import './App.css'

function App() {
  const [searchForFood, setFood] = useState(""); // Söktexten från input
  const [meals, setMeals] = useState([]);// Här lagras API-resultaten

  const fetchFood = () => {
    if (searchForFood === "") return; // Om input är tom, gör inget
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchForFood}`)
      .then(response => response.json())
      .then(data => {
        console.log("API response:", data); 
  
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]); // Om ingen rätt hittas, töms listan
        }
      })
      .catch(error => console.error("Error fetching data", error));
  };
  
  // 🔹 Anropa fetchFood inuti useEffect
  useEffect(() => {
    fetchFood();
  }, [searchForFood]); 

  return (
    <Router>
      <h1>Food Recipes</h1>
      <Routes>
         {/* Startsidan med sökning */}
        <Route
          path="/"
          element={
            <div> 
              <Search setFood={setFood} fetchFood={fetchFood}/>
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
