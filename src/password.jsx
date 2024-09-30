import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function PasswordGenerator() {
  const [upppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordLenght, setPasswordLenght] = useState(5);

  const upperCaseChar = "ABCDEFGHIJkLMNOPQRSTUVWXYZ";
  const lowerCaseChar = "abcdefhijklmnopqrstuvwxyz";
  const numberChar = "0123456789";
  const specialChar = "@#=&%$*?";

  const generatePassword = () => {
    let characterList = "";

    if (lowercase) {
      characterList += lowerCaseChar;
    }
    if (upppercase) {
      characterList += upperCaseChar;
    }
    if (number) {
      characterList += numberChar;
    }
    if (character) {
      characterList += specialChar;
    }
    if (!lowercase && !upppercase && !number && !character) {
      toast.warn("Can not generate. Customize your password!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    let tempPassword = "";

    for (let i = 0; i < passwordLenght; i++) {
      tempPassword +=
        characterList[Math.floor(Math.random() * characterList.length)];
    }

    setPassword(tempPassword);
  };

  return (
    <>
      <div className="all">
        <div class="passwordBody">
          <nav>
            <div className="navHeadDiv">
              <p className="navHead">Password Generator</p>
            </div>
            <div className="modeSection">
              <div className="advanceMode">
                <p>Advance</p>
                <i className="fa-solid fa-toggle-on"></i>
              </div>
              <div className="advanceMode">
                <p>Dark</p>
                <i className="fa-solid fa-toggle-on"></i>
              </div>
            </div>
          </nav>
          <div>
            <div className="lenghtDiv">
              <p>Length</p>
              <input
                className="lenghtInput"
                type="number"
                max={30}
                min={5}
                value={passwordLenght}
              />
            </div>
            <div className="rangeDiv">
              <input
                type="range"
                className="rangeInput"
                max={30}
                min={5}
                defaultValue={passwordLenght}
                onChange={(event) => {
                  setPasswordLenght(event.currentTarget.value);
                }}
              />
            </div>
          </div>
          <div className="customizeDiv">
            <p>Customize your password</p>
          </div>
          <div className="numberDiv">
            <input
              onChange={() => setNumber(!number)}
              checked={number}
              type="checkbox"
            />
            <p className="number">Numbers</p>
            <p className="numberChar">&#40;0-9&#41;</p>
          </div>
          <div className="numberDiv">
            <input
              onChange={() => setLowercase(!lowercase)}
              checked={lowercase}
              type="checkbox"
            />
            <p className="number">Small Leters</p>
            <p className="numberChar">&#40;a-z&#41;</p>
          </div>
          <div className="numberDiv">
            <input
              onChange={() => setUppercase(!upppercase)}
              checked={upppercase}
              type="checkbox"
            />
            <p className="number">Capital Letters</p>
            <p className="numberChar">&#40;A-Z&#41;</p>
          </div>
          <div className="numberDiv">
            <input
              onChange={() => setCharacter(!character)}
              checked={character}
              type="checkbox"
            />
            <p className="number">Special Characters</p>
            <p className="numberChar">&#40;!#$%&&#41;</p>
          </div>
          <div className="resultDiv">
            <input
              className="result"
              type="text"
              placeholder="Password"
              value={password}
            />
          </div>
          <div className="generate">
            <button className="generateBtn" onClick={generatePassword}>
              Click here to generate
            </button>
          </div>
          <div className="developer">
            <p>Developed by ST3RM23</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default PasswordGenerator;
