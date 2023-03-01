// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, isheads: true}

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isheads: true,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        isheads: false,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {total, heads, tails, isheads} = this.state
    const imageUrl = isheads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="image" src={imageUrl} alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-text">Total: {total}</p>
            <p className="count-text">Heads: {heads}</p>
            <p className="count-text">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
