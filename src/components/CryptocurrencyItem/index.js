import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {id, currencyLogo, currencyName, euroValue, usdValue} = currencyDetails
  return (
    <li className="currency-item-container">
      <div className="logo-and-name-container">
        <img
          src={currencyLogo}
          className="logo-image"
          alt="currency_name"
          value="currency_logo"
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="logo-and-name-container">
        <p className="currency-name euro-value">{euroValue}</p>
        <p className="currency-name">{usdValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
