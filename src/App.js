import React, { useState } from "react";


function App() {

  const [name, setName] = useState("")

  return (
    <div className="App">
      <div className="outerContainer">
      <header className="container">
          <label className="label">¿Cómo te llamas?</label>
          <input 
          className="input"
          onChange={(e)=>{
            setName(e.target.value)
          }}
          ></input>

        {name.length > 3 ? (<h1>Hola!! {name}</h1>) : ("")}
          
      </header>
    </div>
    </div>
  );
}

export default App;
