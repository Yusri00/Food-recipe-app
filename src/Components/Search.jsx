import { useState } from "react";

function Search({ setFood, fetchFood }) { // Tar emot setFood som en prop från App.jsx)
    const [searchForFood, setSearchForFood] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleClick = () => {
      if(searchForFood.trim() === ""){
        setErrorMessage('Please fill in field');
        return; 
      }
       setErrorMessage(""); //Felmedelandet rensas om input är korrekt
       setFood(searchForFood); // Skickar värdet till App.jsx
       fetchFood(); // Hämta recept
      };

    const handleKeyDown = (e) => {
      if(e.key === 'Enter'){
        return handleClick();
      } 

    }
      return (
        <div>
          <input
            type="text"
            placeholder="Search for food..."
            value={searchForFood}
            onChange={(e) => setSearchForFood(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button onClick ={handleClick}>Search</button>
          {errorMessage && <p>{errorMessage}</p>} {/* Visa felmeddelande om det finns */}
        </div>
      );
    }
    
    export default Search;