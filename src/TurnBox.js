import React from 'react'

function TurnBox({player, image , matchResult}) {
    const winner = (matchResult.replace(/ .*/,'')).trim();
   const clr = (winner === player) ? "lightgreen" : "tomato";
   console.log(clr);
    return (
        <div className = "turnBox" style={{backgroundColor:clr}}>
            <h1>{player + "'s Box"}</h1>
            <img className="img" src={image}/>
        </div>
        
    )
}

export default TurnBox
