import { useState } from 'react'
import { InputBox } from './components';
import useCurrnecyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState("")
  const [to, setTo] = useState("pkr")
  const [from, setFrom] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrnecyInfo(from)
  const options = Object.keys(currencyInfo)
  
  const swap = () => {
    setTo(from)
    setFrom(to)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}>

                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onAmountChange={(amount) => {setAmount(amount)}}
                            onCurrencyChange={(currency) => {setFrom(currency)}}
                            selectCurrency={from}                            
                        />
                    </div>

                    <div className="relative w-full h-0.5">
                        <button
                          onClick={swap}
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                            swap
                        </button>
                    </div>

                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            amountDisable
                            onCurrencyChange={(currency) => {setTo(currency)}}
                            selectCurrency={to}                            
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert from {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
