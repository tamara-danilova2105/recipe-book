import './App.css';
import { useEffect, useState } from 'react'
import icon from './751463.png'
import RecipiesComponent from './RecipiesComponent';

function App() {

  const MY_ID = '5ff670c9'
  const MY_KEY = '8c28f0555c9644bfae5598e5f086ee39'

  const [mySearch, setMySearch] = useState('')
  const [myRecipies, setMyRecipies] = useState([])
  const [wordSubmitted, serWordSubmitted] = useState('avocado salmon')

  useEffect( () => {
    async function fetchData() {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json()
      setMyRecipies(data.hits)
    }
    fetchData()
  },[wordSubmitted])

  const RecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    serWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <div className="container">
        <img className='fon' src='https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='фон' />
        <h1>Find a Recipe</h1>
      </div>

        <form className="container" onSubmit={finalSearch}>
          <input className='search' placeholder='ingredient...' onChange={RecipeSearch} value={mySearch}></input>
          <button onClick={finalSearch}>
            <img src={icon} width='35px' alt='button search' />
          </button>
        </form>

      <div className='container-recipies'>
        {myRecipies.map((item, index) => (
          <RecipiesComponent 
            key={index}
            label={item.recipe.label} 
            image={item.recipe.image} 
            calories={item.recipe.calories}
            ingredients={item.recipe.ingredientLines}
            totalDaily={item.recipe.totalDaily}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
