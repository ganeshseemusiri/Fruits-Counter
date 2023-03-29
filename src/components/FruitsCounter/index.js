import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  mangoesIncrease = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  bananasIncrease = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount} = this.state
    const {bananasCount} = this.state

    return (
      <div className="app-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="span-count">{mangoesCount}</span> mangoes
            <span className="span-count"> {bananasCount}</span> bananas
          </h1>
          <div className="img-container">
            <div className="fruits-counter">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.mangoesIncrease}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruits-counter">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.bananasIncrease}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
