import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealDetails from './pages/MealDetails.jsx';
import StartPage from './pages/StartPage.jsx';
import './App.css';

function App() {
  const [searchForFood, setFood] = useState(""); // search text from input
  const [meals, setMeals] = useState([]);// here is where API-result is stored
  const [errorMessage, setErrorMessage] = useState("");

  // calls fetchFood inside useEffect
  useEffect(() => {
    if (searchForFood.trim() === "") return;
    fetchFood(setErrorMessage);
  }, [searchForFood]); // runs everytime searchForFood changes 
      
  const fetchFood = (setErrorMessage) => {    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchForFood}`)
      .then(response => response.json())
      .then(data => {
        console.log("API response:", data); 
        if (data.meals) {
          setMeals(data.meals);
          setErrorMessage(""); // no errors fel, clear error message
        } else {
          setMeals([]); // if no meal is found, empty array
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
         {/* Startpage */}
        <Route
          path="/"
          element={<StartPage {...startPageProps} />}
        />
         {/* meal details page */}
        <Route path="/meal/:id" element={<MealDetails meals={meals} />} />
      </Routes>
    </Router>
  );
}

export default App;