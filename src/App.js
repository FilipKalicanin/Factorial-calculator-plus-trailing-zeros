import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: 0,
      result: []
    }

    this.handleChangeFactorial = this.handleChangeFactorial.bind(this);
    this.factorialNumbers = this.factorialNumbers.bind(this);
    this.factorialise = this.factorialise.bind(this);
    this.trailing = this.trailing.bind(this);
  }

  handleChangeFactorial(event) {
    event.preventDefault();

    this.setState({
      inputNumber: event.target.value
    })
  }

  factorialise(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result.toLocaleString('fullwide', { useGrouping: false });
  }

  trailing(number) {
    let zeros = 0;
    for (let i = 5; i <= number; i++) {
      let pom = i;
      while (pom % 5 === 0) {
        zeros++;
        pom = pom / 5;
      }
    }
    return zeros;
  }

  factorialNumbers(event) {
    event.preventDefault();

    let number = Number(this.state.inputNumber);
    let filterArr = [];

    if (number < 171) {
      for (let i = 1; i <= number; i++) {
        filterArr.push({
          numberInOrder: i,
          factorial: 0,
          trailingZeros: 0
        });
      }

      filterArr.forEach(el => {
        el.factorial = this.factorialise(el.numberInOrder);
        el.trailingZeros = this.trailing(el.numberInOrder);
      })
    } else {

      filterArr.push({
        numberInOrder: number,
        factorial: 0,
        trailingZeros: 0
      });

      filterArr.forEach(el => {
        el.trailingZeros = this.trailing(el.numberInOrder);
      })

    }

    this.setState({
      result: filterArr
    })

  }


  render() {
    return (
      <div className="container">
        <div className="input-fields-container">
          <div className="input-field">
            <label className="label">Input number to get factorials and trailing zeros for numbers from 1 to number you've entered:</label>
            <input type="number" className="input" onChange={this.handleChangeFactorial}></input>
            <button className="btn-confirm" onClick={this.factorialNumbers}>Submit</button>
          </div>
        </div>

        <div className="heading-output">
          <div className="number">
            <p className="output-param">Number:</p>
          </div>
          <div className="trailing-number">
            <p className="output-param">Trailing Zeros:</p>
          </div>
          <div className="factorial">
            <p className="output-param">Factorial:</p>
          </div>
        </div>

        <div className="output-field">
          {this.state.result.map(el => {
            return (
              <div key={el.numberInOrder} className="output-each">
                <div className="number">
                  <p className="output-param">{el.numberInOrder}</p>
                </div>
                <div className="trailing-number">
                  <p className="output-param">{el.trailingZeros}</p>
                </div>
                <div className="factorial">
                  <p className="output-param">{el.factorial}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }

}

export default App;
