import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealDetails from './pages/MealDetails.jsx';
import StartPage from './pages/StartPage.jsx';
import './App.css';

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
          setErrorMessage(""); // Inga fel, vi rensar felmeddelandet
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

    // TODO: Försök dig på VG uppgiften, om inte - testa med olika projekt som involverar global state management, typ Context APIet eller Zustand
    const startPageProps = {
      handleReset,
      setFood,
      fetchFood,
      errorMessage,
      meals
    }

  return (
    <Router>
      <Routes>
         {/* Startsidan med sökning */}
        <Route
          path="/"
          element={<StartPage {...startPageProps} />}
        />
         {/* Sidan för att visa detaljer om en måltid */}
        <Route path="/meal/:id" element={<MealDetails meals={meals} />} />
      </Routes>
    </Router>
  );
}

export default App;