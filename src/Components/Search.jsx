import { useState } from "react";

function Search(){
    const [searchForFood, setFood] = useState('');
    return(
    <div>
        <input 
        type="text" 
        placeholder="Search for food.."
        value={searchForFood}
        onChange={(e)=> setFood(e.target.value)} // Uppdaterar state
        />
        <button type="submit"></button>
    </div>
    ); 
}

export default Search;