import { useState } from "react";
import { InputBox } from "./components/index.js";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  console.log("currencyInfo", currencyInfo);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const reactLogo = `https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=400`;
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${reactLogo})` }}
    >
      <div className="w-full ">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form action="" onSubmit={(e) => e.preventDefault() && convert() && console.log('form submitted')}>
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                selectedCurrency={from}
              />
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 border-white rounded"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mb-1">
                <InputBox
                  label="to"
                  amount={convertedAmount}
                  onAmountChange={(amount) => {
                    setConvertedAmount(amount);
                  }}
                  onCurrencyChange={(currency) => setTo(currency)}
                  currencyOptions={options}
                  selectedCurrency={to}
                  amountDisabled
                />
                <button
                
                type="submit"
                className="mt-2 w-full bg-blue-600 text-white px-3 py-2 border-white rounded"
               onClick={convert} >Convert{" "}from {from.toUpperCase()} to {to.toUpperCase()}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
