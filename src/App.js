import React, { useState } from "react"
import './App.css';
import Products from "./components/Products";

function App() {
  const [search,setSearch]=useState('')
  const [data,setData]=useState([])
  const YOUR_APP_ID="0c198be8"
  const YOUR_APP_KEY="6e466d84843c6e8372557c9ebea85b84"

const submitHandler=(e)=>{
  e.preventDefault();
  fetch (`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&health=alcohol-free&calories=591-722&field=uri`).then(
    reponse=>reponse.json()
  ).then(
    data=>setData(data.hits)
  ) 
}
  return (
    <div className="App">
      <center>
        <h4>Food Recipie App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" className="rounded" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
          <input type="submit" className="btn btn-primary mt-1" value="submit"/>
        </form>
        {
          data.length>=1 ? <Products data={data}/>: "No Item Found"
        }
      </center>
    </div>
  );
}

export default App;
