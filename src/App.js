import React, { useEffect , useState } from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () =>{
 
  const APP_ID = '5ef29d85';
  const APP_KEY = ' b3a29014721ddf4d05428b6a367d3453';
    
  const[recipes , setRecipes]  = useState([]);
  const [search , setsearch] = useState("");
  const [query, setquery]  = useState('chicken');

  useEffect(()=>{
   getRecipes();    
  },[query])

  const updatesearch = e =>{
    setsearch(e.target.value);
  }
  const getSearch = e =>{
    e.preventDefault();
    setquery(search)
    setsearch("")
  }
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
     const data = await response.json();
     console.log(data.hits);
     setRecipes(data.hits)

  }  

  return(
    <div className="App">
      <form onSubmit={getSearch} className = "search-form">
      <input className= "search-bar"type="text" value = {search} onChange = {updatesearch}/>
      <button  className="search-button"type="submit">
      Search
      </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
            
        <Recipe key= {recipe.recipe.label} title = {recipe.recipe.label} image = {recipe.recipe.image} 
        ingredients ={recipe.recipe.ingredients} />
      ))}
      </div>
    </div>
  )
}



export default App;
