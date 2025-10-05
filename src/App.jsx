import { useState } from "react";

import "./App.css";

function App() {
  var [res, setRes] = useState("");

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

  return (
    <>
      <div className="calculator">
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
