import { useState } from "react";

function Search({ setFood, fetchFood }) { // Tar emot setFood som en prop från App.jsx)
    const [searchForFood, setSearchForFood] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleSearch = () => {
      if(searchForFood.trim() === ""){
        setErrorMessage('Please fill in field');
        return; 
      }
       // Stoppa `fetchFood()` från att köras
       setErrorMessage(""); //Felmedelandet rensas om input är korrekt
       setFood(searchForFood); // Skickar värdet till App.jsx
       fetchFood(); // Gör API-anropet vid klickning
      };

      return (
        <div>
          <input
            type="text"
            placeholder="Search for food..."
            value={searchForFood}
            onChange={(e) => setSearchForFood(e.target.value)}
          />
          <button onClick ={handleSearch}>Search</button>
          {errorMessage && <p>{errorMessage}</p>} {/* Visa felmeddelande om det finns */}
        </div>
      );
    }
    
    export default Search;