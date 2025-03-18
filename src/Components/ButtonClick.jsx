
function ButtonClick({fetchFood}){
 
 const handleClick = () => {
    fetchFood();
  };
    return(
        <button onClick={handleClick}>Generate food recipe</button>
  );
}

export default ButtonClick;