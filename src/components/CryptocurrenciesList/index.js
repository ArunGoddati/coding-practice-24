import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrenciesData()
  }

  getCryptoCurrenciesData = async () => {
    const {currencyList, isLoading} = this.state
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedata = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({
      currencyList: updatedata,
      isLoading: false,
    })
  }

  renderImageAndHeading = () => (
    <div className="main-headingAndImage-container">
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="main-image"
      />
    </div>
  )

  renderCurrencyListData = () => {
    const {currencyList, isLoading} = this.state
    return (
      <div className="currencyList-container">
        <div className="heading-text-container">
          <p className="coin-type-paragraph">Coin Type</p>
          <div className="used-and-euro-texy-container">
            <p className="coin-type-paragraph">USD</p>
            <p className="coin-type-paragraph">EURO</p>
          </div>
        </div>
        <ul>
          {currencyList.map(each => (
            <CryptocurrencyItem currencyDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="outer-container">
        {isLoading ? '' : this.renderImageAndHeading()}
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCurrencyListData()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
