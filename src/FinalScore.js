import React from "react";

function FinalScore({ player1, player2, player1score, player2score, changeState}) {
  let winner = "";
  if (player1score != player2score)
    winner = player1score > player2score ? player1 : player2;
  return (
    <div className="Game">
      <h2 className="bg">Final Result</h2>
    {winner? (
        <h1 className="bg">{winner} &nbsp;&nbsp;won!!!!</h1>
    ) : (<h1 className="bg">It's a draw!!!!</h1>)}
    <h3 className="bg">Final Score</h3>
    <div className="boxContainer bg">
    <h4>{player1} : {player1score}</h4>
    <h4>{player2} : {player2score}</h4>
    </div>
        <button className="bg" style ={{marginTop : 50+"px"} }onClick={()=>changeState("start")}>Play Again!!!</button>
    </div>
  );
}

export default FinalScore;
