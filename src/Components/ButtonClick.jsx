import { useState } from "react";

function ButtonClick({searchForFood, fetchFood}){
 
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    if(searchForFood.trim() === ""){
      setErrorMessage('Please fill in text field');
      return; // Stoppa `fetchFood()` från att köras
    }
    setErrorMessage(""); //Felmedelandet rensas om input är korrekt
    fetchFood();
  };

    return(
      <div>
        <button onClick={handleClick}>Generate food recipe</button>
        {errorMessage && <h1>{errorMessage}</h1>} {/* Visa felmeddelande om det finns */}
      </div>
  );
}

export default ButtonClick;