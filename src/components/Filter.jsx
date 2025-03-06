import { useState } from "react";

export default function Filter({ userInput, onChange }) {
  //   const [initialInvestment, setInitialInvestment] = useState(0);
  //   const [annualInvestment, setAnnualInvestment] = useState();
  //   const [expectedReturn, setExpectedReturn] = useState();
  //   const [duration, setDuration] = useState(0);
  //   function handleInitialChange(value) {
  //     setInitialInvestment(value);
  //   }
  //   function handleAnnualChange(value) {
  //     setAnnualInvestment(value);
  //   }
  //   function handleExpectedChange(value) {
  //     setExpectedReturn(value);
  //   }
  //   function handleDurationChange(value) {
  //     setDuration(value);
  //   }
  //   console.log(annualInvestment);
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">INITIAL INVESTMENT</label>
          <input
            type="number"
            id="initial"
            value={userInput.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="annual">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annual"
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input
            type="number"
            id="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
