import React from 'react'
import MealList from '../components/MealList'
import Search from '../components/Search'
import { Link } from 'react-router-dom'

const StartPage = ({ handleReset, setFood, fetchFood, errorMessage, meals }) => {
  return (
    <div className="startPage"> 
        <div className="titleContainer">
            <Link to="/" onClick={handleReset}>
                <h1>Food Recipes</h1>
            </Link>
        </div>

        <div className="searchContainer">
            <Search 
            setFood={setFood} 
            fetchFood={fetchFood} 
            errorMessage={errorMessage} 
            />
        </div>

        <div className='mealListContainer'>
            <MealList meals={meals} />
        </div>
    </div>
  )
}

export default StartPage