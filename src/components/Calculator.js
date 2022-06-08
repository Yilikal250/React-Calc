import React from 'react';

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

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Calculator = () => (
    <div className="container">
      <from>
        <input type="text" placeholder="0" />
      </from>
      <div className="keypad">
        {keys.map((btn) => (<button type="button" key={btn.name} className={btn.class}>{btn.name}</button>))}
      </div>
    </div>
  );

  render() {
    return (
      <div className="container">
        <from>
          <input type="text" placeholder="0" />
        </from>
        <div className="keypad">
          {keys.map((btn) => (<button type="button" key={btn.name} className={btn.class}>{btn.name}</button>))}
        </div>
      </div>
    );
  }
}

export default Calculator;
