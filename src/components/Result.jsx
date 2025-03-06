import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ userInput }) {
  const data = calculateInvestmentResults(userInput);
  console.log(userInput);
  console.log("data", data);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          const totalInterest =
            row.valueEndOfYear -
            row.annualInvestment * row.year -
            initialInvestment;
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
