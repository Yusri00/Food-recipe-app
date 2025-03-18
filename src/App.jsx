import { useEffect, useState } from 'react'
import Search from './Components/Search.jsx'
import Details from './Components/Details.jsx'
import SearchList from './Components/SearchList.jsx'
import './App.css'

function App() {
  const [searchForFood, setFood] = useState(""); // Söktexten från input
  const [meals, setMeals] = useState([]);// Här lagras API-resultaten
  
  // 🔍 Hämta data när searchForFood ändras

  
  const fetchFood = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchForFood}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMeals(data.meals || []);
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
      <button onClick={fetchFood}>Generate food recipe</button>
      <Search setFood={setFood} />
      <Details />
       <SearchList meals={meals}/>
    </div>
  );
}

export default App;
