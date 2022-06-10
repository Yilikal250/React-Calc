import React, { useState } from 'react';
import calculate from '../logic/calculate';
import React, { Component } from 'react';

const keys = [
  {
    name: 'AC',
    class: 'btn gray',
  },
  {
    name: '+/-',
    class: 'btn gray',
  },
  {
    name: '%',
    class: 'btn gray',
  },
  {
    name: '÷',
    class: 'btn orange',
  },
  {
    name: '7',
    class: 'btn gray',
  },
  {
    name: '8',
    class: 'btn gray',
  },
  {
    name: '9',
    class: 'btn gray',
  },
  {
    name: 'x',
    class: 'btn orange',
  },
  {
    name: '4',
    class: 'btn gray',
  },
  {
    name: '5',
    class: 'btn gray',
  },
  {
    name: '6',
    class: 'btn gray',
  },
  {
    name: '-',
    class: 'btn orange',
  },
  {
    name: '1',
    class: 'btn gray',
  },
  {
    name: '2',
    class: 'btn gray',
  },
  {
    name: '3',
    class: 'btn gray',
  },
  {
    name: '+',
    class: 'btn orange',
  },
  {
    name: '0',
    class: 'btn gray zero',
  },
  {
    name: '.',
    class: 'btn gray',
  },
  {
    name: '=',
    class: 'btn orange',
  },
];
const Calculator = () => {
  const [prev, setState] = useState({ total: null, next: null, operation: null });

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    this.setState((prev) => calculate(prev, e.target.innerText));
  const clickHandler = (e) => {
    const display = () => calculate(prev, e.target.innerText);
    setState(display);
  };
  let result = 0;
  const { total, next, operation } = prev;
  if (next === null && operation === null && total === null) {
    result = 0;
  }

  render() {
    const { total, next, operation } = this.state;
    let result;
    if (next === null && operation === null && total === null) {
      result = 0;
    }

    if (next !== null && operation === null && total === null) {
      result = next;
    }

    if (next === null && operation !== null && total !== null) {
      result = total + operation;
    }
  if (next !== null && total === null) {
    result = next;
  }

    if (next !== null && operation !== null && total !== null) {
      result = total + operation + next;
    }
  if (next === null && operation !== null && total !== null) {
    result = total + operation;
  }

    if (next === null && operation === null && total !== null) {
      result = total;
    }
  if (next !== null && operation !== null && total !== null) {
    result = total + operation + next;
  }

    return (
      <div className="container">
        <div className="result">{result}</div>
        <div className="keypad">
          {keys.map((btn) => (<button type="button" value={btn.name} key={btn.name} onClick={this.clickHandler} className={btn.class}>{btn.name}</button>))}
        </div>
      </div>
    );
  if (next === null && operation === null && total !== null) {
    result = total;
  }
}
  return (
    <div className="container">
      <div className="result">{result}</div>
      <div className="keypad">
        {keys.map((btn) => (<button type="button" value={btn.name} key={btn.name} onClick={clickHandler} className={btn.class}>{btn.name}</button>))}
      </div>
    </div>
  );
};

export default Calculator;
