import { useState, useRef, useEffect } from "react";

function Search({ setFood, errorMessage }) { // Tar emot setFood som en prop från App.jsx)
    const [searchForFood, setSearchForFood] = useState('');
    const [localError, setLocalError] = useState('');
    const inputRef = useRef(null);
    
    useEffect(() => {
      inputRef.current.focus();
    },[]);

    const handleClick = () => {
      if(searchForFood.trim() === ""){
        setLocalError('Please fill in field');
        return; 
      }
       setLocalError(""); //Felmedelandet rensas om input är korrekt
       setFood(searchForFood); // Skickar värdet till App.jsx. App tar hand om resten via useEffect
      };

    const handleKeyDown = (e) => {
      if(e.key === 'Enter'){
        return handleClick();
      } 
    }   

      return (
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for food..."
            value={searchForFood}
            onChange={(e) => setSearchForFood(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button onClick ={handleClick}>Search</button>

          {localError && <p>{localError}</p>} {/* Visa felmeddelande om det finns */}
          {!localError && errorMessage && <p>{errorMessage}</p>}
        </div>
      );
    }
    
    export default Search;