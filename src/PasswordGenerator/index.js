import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

import "./style.css";
import "react-toastify/dist/ReactToastify.css";

import { Button, Card } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import {
  upperCaseLetters,
  lowerCaseLetters,
  numbers,
  specialCharacters,
  COPY_SUCCESS,
  COPY_FAILURE,
  selectOption,
} from "./Components/Variables";
import {
  notify,
  copyToClipboard,
  createPassword,
} from "./Components/functions";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const GeneratePassword = (e) => {
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify(selectOption, true);
    }
    let characterList = "";

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }

    if (includeNumbers) {
      characterList = characterList + numbers;
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }

    setPassword(createPassword(characterList, passwordLength));
  };

  const handleCopyPassword = () => {
    if (password === "") {
      notify(COPY_FAILURE, true);
    } else {
      copyToClipboard(password);
      notify(COPY_SUCCESS);
    }
  };

  return (
    <div className="mainContainer">
      <h1>{"Password Generator"}</h1>

      <Card className="cardContainer">
        <div className="passwordSection">
          <h4>{password}</h4>
          <FileCopyIcon onClick={handleCopyPassword} className="copyBtn" />
        </div>

        <form>
          <div className="formGroup">
            <label htmlFor="passwordLength" className="inputLabel">
              {"Password Length:"}
            </label>
            <input
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type="number"
              name="passwordLength"
              max="20"
              min="8"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="uppercaseLetters" className="inputLabel">
              {"Include Uppercase Letters"}
            </label>
            <input
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              type="checkbox"
              name="uppercaseLetters"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="lowercasLetters" className="inputLabel">
              {"Include Lowercase Letters"}
            </label>
            <input
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              type="checkbox"
              name="lowercaseLetters"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="includeNumbers" className="inputLabel">
              {"Include Numbers"}
            </label>
            <input
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type="checkbox"
              name="includeNumbers"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="includeSymbols" className="inputLabel">
              {"Include Symbols"}
            </label>
            <input
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type="checkbox"
              name="includeSymbols"
            />
          </div>

          <Button onClick={GeneratePassword} className="generateBtn">
            {" Generate Password"}
          </Button>
        </form>
      </Card>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
