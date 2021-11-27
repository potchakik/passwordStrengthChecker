import "./App.css";
import React, { useState } from "react";
const axios = require("axios");

function App() {
  const [type, setType] = useState("input");
  const [score, setScore] = useState("");
  const [guesTimeString, setGuessTimeString] = useState("");
  const [warning, setWarning] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const showHide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let currType = type === "input" ? "password" : "input";
    console.log(currType);
    setType(currType);
  };

  const passwordStrength = async (e) => {
    const res = await axios({
      method: "post",
      url: "https://o9etf82346.execute-api.us-east-1.amazonaws.com/staging/password/strength",
      data: {
        password: `${e.target.value}`,
      },
    });
    if (res.data.score === 4) {
      setScore("Your password is very strong!");
    } else if (res.data.score === 3) {
      setScore("Your password is strong!");
    } else if (res.data.score === 2) {
      setScore("Your password is medium!");
    } else if (res.data.score === 1) {
      setScore("Your password is too weak!");
    } else {
      setScore("Your password is very weak!");
    }

    setIsToggled(true);
    setGuessTimeString(res.data.guessTimeString);
    setWarning(res.data.warning);
    setSuggestions(res.data.suggestions);
  };

  return (
    <div>
      <label className="label-password">
        Is your password strong enough?
        <input
          type={type}
          className="input-password"
          onChange={passwordStrength}
          placeholder="password"
          maxLength="12"
        />
        <span className="show-password" onClick={showHide}>
          {type === "input" ? "Hide" : "Show"}
        </span>
        <span className="strength-password" data-score={score}></span>
      </label>
      {isToggled && (
        <div className="grid-messages">
          <h3 className="grid-item" id="password-strength">
            {score}
          </h3>

          <h5 className="grid-item">
            It will take {guesTimeString} to guess your password. {warning}
          </h5>

          <h3 className="grid-item" id="Suggestions">
            {suggestions}
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
