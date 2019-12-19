import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      submit: '',
    };
    this.handleClick = this.handleClick.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  handleClick(e) {
  this.setState(
    {[e.target.name]: e.target.value}
    );
  }

  calculate() {
  const mR = (this.state.rate / 100 / 12);
  const mT = (this.state.term * 12);
  const cost = (this.state.balance * (mR * (1 + mR)**mT) / ((1 + mR)**mT - 1));

   this.setState(
    { submit: cost.toFixed(2) + " is your payment." }
  );
  }

  render() {
    console.log(this.state)
    return (
      <div className='container' id="container">
        <div class="row">
        <div className="col-lg-6 col-md-offset-3">
          <h3>Mortgage Calculator</h3>
        <div id="input">
        {<input name="balance" type="number" value={this.state.balance} onChange={this.handleClick}/>}
          {<input name="rate" type="number" step=".01" value={this.state.rate} onChange={this.handleClick}/>}
          </div>
          <div id="select">
          {<select name="term" onChange={this.handleClick}>
            <option type="number" value="15">15</option>
            <option type="number" value="30">30</option>
            </select>}
            </div>
            <div id="button">
            {<button name="submit" onClick={this.calculate}>Calculate</button>}
            </div>
            {<div name="output" id="output">{this.state.submit}</div>}
        </div>
    </div>
      </div>
    );
  }
}
