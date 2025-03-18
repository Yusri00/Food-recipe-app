import { useState } from "react";

function Search(){
    const [searchForFood, setFood] = useState('');
    const handleInputChange = (e) => {
        setSearchForFood(e.target.value);
        setFood(e.target.value); // Skicka det upp till App.jsx för att uppdatera searchForFood
      };
    
      return (
        <div>
          <input
            type="text"
            placeholder="Search for food..."
            value={searchForFood}
            onChange={handleInputChange} // Uppdatera både lokalt och i App.jsx
          />
        </div>
      );
    }
    
    export default Search;