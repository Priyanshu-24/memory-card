import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [checkArr, setCheckArr] = useState([]);

  const check = (dogName) => {

    if (!checkArr.includes(dogName)) {

      setCheckArr((e) => [...e, dogName]);
      setScore((e) => e + 1);

    } 
    else {

      setHighScore(score);
      setScore(0);
      setCheckArr([]);
      
    }
  };

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <div className = "main">
        <Main check={check} score={score} highScore={highScore} />
      </div>
    </div>
  );
}

export default App;
