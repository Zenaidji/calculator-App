import { useState, useEffect } from "react";

function App() {
  var [res, setRes] = useState("");
  var [theme, setTheme] = useState("theme1");

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const savedTheme = getTheme();

    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      const initialTheme = prefersDarkMode ? "theme1" : "theme2";
      setTheme(initialTheme);
      document.body.className = initialTheme;
    }
  }, [setTheme]);

  useEffect(() => {
    if (theme) {
      document.body.className = theme;
    }
  }, [theme]);

  function handleClick(e) {
    setRes(res + e.target.value);
  }

  function reset() {
    setRes("");
  }

  function del() {
    setRes(res.slice(0, -1));
  }

  function equals() {
    setRes(eval(res).toString());
  }
  function toggleTheme(e) {
    setTheme(e.target.value);
    localStorage.setItem("theme", e.target.value);
  }
  function getTheme() {
    return localStorage.getItem("theme");
  }

  return (
    <>
      <div className={`calculator `}>
        <div className="calc">
          <div className="title">calc</div>
          <span className="them">THEME</span>
          <div className="radio">
            <div className="labels">
              <label htmlFor="theme1">1</label>
              <label htmlFor="theme2">2</label>
              <label htmlFor="theme3">3</label>
            </div>

            <div className="themes">
              <input
                type="radio"
                onChange={toggleTheme}
                id="theme1"
                value="theme1"
                checked={theme === "theme1"}
              />
              <input
                type="radio"
                onChange={toggleTheme}
                id="theme2"
                value="theme2"
                checked={theme === "theme2"}
              />
              <input
                type="radio"
                onChange={toggleTheme}
                id="theme3"
                value="theme3"
                checked={theme === "theme3"}
              />
            </div>
          </div>
        </div>
        <div className="display">
          <div className="display-inner">{res}</div>
        </div>

        <div className="keypad">
          <button className="num" value={"7"} onClick={handleClick}>
            7
          </button>
          <button className="num" value={"8"} onClick={handleClick}>
            8
          </button>
          <button className="num" value={"9"} onClick={handleClick}>
            9
          </button>
          <button className="del" onClick={del}>
            DEL
          </button>

          <button className="num" value={"4"} onClick={handleClick}>
            4
          </button>
          <button className="num" value={"5"} onClick={handleClick}>
            5
          </button>
          <button className="num" value={"6"} onClick={handleClick}>
            6
          </button>
          <button className="num" value={"+"} onClick={handleClick}>
            +
          </button>

          <button className="num" value={"1"} onClick={handleClick}>
            1
          </button>
          <button className="num" value={"2"} onClick={handleClick}>
            2
          </button>
          <button className="num" value={"3"} onClick={handleClick}>
            3
          </button>
          <button className="num" value={"-"} onClick={handleClick}>
            -
          </button>

          <button className="num" value={"."} onClick={handleClick}>
            .
          </button>
          <button className="num" value={"0"} onClick={handleClick}>
            0
          </button>

          <button className="num" value={"/"} onClick={handleClick}>
            /
          </button>
          <button className="num" value={"*"} onClick={handleClick}>
            x
          </button>

          <button className="reset col-span-2" onClick={reset}>
            RESET
          </button>
          <button className="eq col-span-2" onClick={equals}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
