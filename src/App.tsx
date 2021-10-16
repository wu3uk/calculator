import React, { useState } from 'react';
import './App.css';
import Calculator from './scripts/calculator'

function App() {
  const [output, setOutput] = useState('');
  const [expr, setExpr] = useState('');
  const Oleg: Calculator = new Calculator();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const div: HTMLDivElement = event.currentTarget;
    if (div.id == '=') {
      if (expr.length) {
        let ans: number | undefined = Oleg.calc(
          expr[expr.length - 1] == ' ' ? expr.substring(0, expr.length - 1) : expr
        );
        if (ans == undefined) {
          setOutput(output + (expr.length != 0 ? '\n': '') + 'error' + '\n');
        }
        else {
          setOutput(output + '\n' + 'ans: ' + ans.toString() + '\n');
        }
        setExpr('');
      }
    }
    else if (div.id == 'AC') {
      setOutput(output.substring(0, output.length - expr.length));
      setExpr('');
    }
    else if (div.id == 'C') {
      if (expr.length) {
        setOutput(output.substring(0, output.length - 1));
        setExpr(expr.substring(0, expr.length - 1));
      }
    }
    else if (div.id >= '0' && div.id <= '9' || div.id == '.') {
      setOutput(output + div.id);
      setExpr(expr + div.id);
    }
    else {
      setOutput(output + ' ' + div.id + ' ');
      setExpr(expr + ' ' + div.id + ' ');
    }
  }

  const buttons: JSX.Element[] = [
    '+', '-', '*', '/',
    '%', '^', '(', ')',
    '.', '=', '0', '1',
    '2', '3', '4', '5',
    '6', '7', '8', '9',
    'C', 'AC'
  ].map(button =>
    <div 
      className="button"
      id={button}
      onClick={handleClick}
      key={button}
    >
      {button}
    </div>
  );

  return (
    <div className="App"> 
      <h1>Calculator 1337</h1>
      <div className="main">
        <div className="output">
          { 
            output ? '' : 
            <h5 style={{margin: "5px", opacity: "0.5"}}>
              type here something...
            </h5>
          }
          { output }
        </div>
        <div className="buttons">
          <div id="operators">
            { buttons.slice(0, 10) }
          </div>
          <div id="numbers">
            { buttons.slice(10, 22) }
          </div>   
        </div>
      </div>
    </div>
  );
}

export default App;
