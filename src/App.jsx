import Filter from "./components/Filter";
import Result from "./components/Result";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isInputValid = userInput.duration >= 1;
  function handleChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        // [inputIndentifier]: newValue // gây ra lỗi string + number = string
        [inputIndentifier]: +newValue, // thêm dấu cộng đằng trước để chuyển sang kiểu number
      };
    });
  }
  return (
    <>
      <Filter userInput={userInput} onChange={handleChange} />
      {!isInputValid && (
        <p className="center">Duration must be at least 1 year.</p>
      )}
      {isInputValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
