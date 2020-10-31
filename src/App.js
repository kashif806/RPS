import "./App.css";
import React, { useState } from "react";
import GamePlay from "./GamePlay";


function App() {
  const [gameState, setgameState] = useState("start");
  const [rounds, setRounds] = useState(5);


  const changeState = (state) => setgameState(state);

  return (
    <div className="App">
      <h1 className="bg">Rock Paper Scissor</h1>
      {gameState==="inProgress" ? (<GamePlay 
        rounds={rounds}
        changeState={changeState}
        />) : (<div className="msg">
        <form className="bg" onSubmit={(e)=>{
          e.preventDefault();
          setgameState("inProgress");
        }}>
  <label htmlfor="rounds">Enter total number of rounds:</label>
  <input type="number"  name="rounds" onChange={(e)=>setRounds(()=>(parseInt(e.target.value)))}/>
  <input type="submit" value="Lets Play Hamza" />
  
  </form>
    </div>)}
    </div>
  );
}

export default App;

