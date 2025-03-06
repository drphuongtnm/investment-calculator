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
      <Result userInput={userInput} />
    </>
  );
}

export default App;
