// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerate = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="background-container">
        <div className="Random-number-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a Random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.onGenerate}
            className="generate-btn"
          >
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
