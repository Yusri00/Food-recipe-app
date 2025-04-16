import { useState, useRef, useEffect } from "react";

function Search({ setFood, errorMessage }) { 
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
       setLocalError(""); //Error message gets delete if input is correct
       setFood(searchForFood); // send value to App.jsx. App takes care of the rest via useEffect
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

          {localError && <p className="localError">{localError}</p>} {/* Show error message if there is */}
          {!localError && errorMessage && <p className= "error">{errorMessage}</p>}
        </div>
      );
    }
    
    export default Search;