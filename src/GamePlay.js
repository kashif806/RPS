import "./App.css";
import React, { useState, useEffect } from "react";
import TurnBox from "./TurnBox";
import FinalScore from "./FinalScore";
import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";
import all from "./rps.png";

function GamePlay({rounds , changeState}) {
  const [player1Turn, setPlayer1Turn] = useState(all);
  const [player2Turn, setPlayer2Turn] = useState(all);
  const [player1score, setPlayer1Score] = useState(0);
  const [player2score, setPlayer2Score] = useState(0);
  const [matchNo, setMatchNo] = useState(0);
  const [matchResult, setMatchResult] = useState("");
  const [isEnd, setIsEnd] = useState(false);


  const [msg, setMsg] = useState("Rock / Paper / Scissor ???");

  const player1 = "Hamza";
  const player2 = "Computer";
  const add = "\xa0\xa0 won";

  const rps = [rock, paper, scissors];

  const picked = (el) => {
    setPlayer1Turn(() => el);
    setPlayer2Turn(() => rps[Math.floor(Math.random() * 3)]);
    setMatchNo((prevNo) => prevNo + 1);
    setMatchResult("");
  };

  const gameResult = () => {
    if (player1Turn === rock && player2Turn === paper) {
      setPlayer2Score((prevScore) => prevScore + 1);
      setMatchResult(player2 + add);
    } else if (player1Turn === rock && player2Turn === scissors) {
      setPlayer1Score((prevScore) => prevScore + 1);
      setMatchResult(player1 + add);
    } else if (player1Turn === paper && player2Turn === scissors) {
      setPlayer2Score((prevScore) => prevScore + 1);
      setMatchResult(player2 + add);
    } else if (player1Turn === paper && player2Turn === rock) {
      setPlayer1Score((prevScore) => prevScore + 1);
      setMatchResult(player1 + add);
    } else if (player1Turn === scissors && player2Turn === rock) {
      setPlayer2Score((prevScore) => prevScore + 1);
      setMatchResult(player2 + add);
    } else if (player1Turn === scissors && player2Turn === paper) {
      setPlayer1Score((prevScore) => prevScore + 1);
      setMatchResult(player1 + add);
    } else if (player1Turn === player2Turn) {
      setMatchResult("DRAW!!!");

    }
    setIsEnd(() => matchNo === rounds);
    console.log(matchNo,rounds, isEnd);
  };

  useEffect(() => {
    if (matchNo > 0) gameResult();
    
  }, [matchNo]);

  return (
    <div className="App">
        {isEnd ? (<FinalScore 
            player1={player1}
            player2={player2}
            player1score={player1score}
            player2score={player2score}
            changeState = {changeState}
            />) : (<div className="Game">
        <div className="boxContainer">
          <h2 className= "bg">
            {player1} Score : {player1score}
          </h2>
          <h2 className= "bg">
            {player2} Score : {player2score}
          </h2>
        </div>
        <div className="boxContainer">
          <TurnBox
            player={player1}
            matchResult={matchResult}
            image={player1Turn}
          />
          <div>
            <h2 className= "bg">Game {matchNo}</h2>
            {matchResult ? <h3 className= "bg">{matchResult}</h3> : <div></div>}
          </div>
          <TurnBox
            player={player2}
            matchResult={matchResult}
            image={player2Turn}
          />
        </div>
        <div>
          {rps.map((el) => (
            <img
              className="selectorImage"
              style={{ width: 50, height: 50 }}
              src={el}
              onClick={() => picked(el)}
            />
          ))}
        </div>
        <div>
          <h3 className= "bg">{msg}</h3>
        </div>
      </div>)}
      
    </div>
  );
}

export default GamePlay;