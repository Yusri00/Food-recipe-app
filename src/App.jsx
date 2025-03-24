import { useEffect, useState } from 'react'
import Search from './components/Search.jsx'
import SearchList from './components/SearchList.jsx'
import ButtonClick from './components/ButtonClick.jsx'
import MealInfo from './components/MealInfo.jsx'
import './App.css'

function App() {
  const [searchForFood, setFood] = useState(""); // Söktexten från input
  const [meals, setMeals] = useState([]);// Här lagras API-resultaten
  
  // 🔍 Hämta data när searchForFood ändras
  const fetchFood = () => {
    if(!searchForFood.trim()){
      console.log('Sökfältet är tomt. Inget API-anrop');
      return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchForFood}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMeals(data.meals || []); // Om inga resultat, sätt en tom array
      })
      .catch(error => console.error("Fel vid inhämtning av data", error));
  };

  useEffect(() => {
    console.log("useEffect körs! searchForFood:", searchForFood);
    if (searchForFood === "") return; // Om input är tomt, gör inget
    fetchFood(); // Anropa fetchFood när searchForFood ändras
  }, [searchForFood]); // useEffect körs vid förändring av searchForFood  

  return (
    <div>
      <h1>Smariga recept</h1>
      <Search setFood={setFood} />
      <ButtonClick fetchFood={fetchFood} />
      <SearchList meals={meals}/>
      <MealInfo meals={meals}/>
    </div>
  );
}

export default App;
