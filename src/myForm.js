import { useState } from "react";

export default function MyForm() {
  const [inputs, setInputs] = useState({});
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result4, setResult4] = useState("");
  const [result5, setResult5] = useState("");
  const [result6, setResult6] = useState("");

  const style = {
    marginBottom: 2 + "em",
    marginLeft: 2 + "em",
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    setResult1(
      `${(inputs.totalMix / inputs.totalPlants).toFixed(4)} mL of mix per plant`
    );
    setResult2(
      `${(
        (inputs.totalBleach / inputs.totalMix) *
        (inputs.totalMix / inputs.totalPlants)
      ).toFixed(4)} mL bleach per plant`
    );
    setResult3(
      `${(
        (inputs.totalPH / inputs.totalMix) *
        (inputs.totalMix / inputs.totalPlants)
      ).toFixed(4)} mL pH Down per plant`
    );
    setResult4(
      `${((inputs.totalMix / inputs.totalPlants) * inputs.currBatch).toFixed(
        4
      )} mL of mix per batch`
    );
    setResult5(
      `${(
        (inputs.totalBleach / inputs.totalMix) *
        (inputs.totalMix / inputs.totalPlants) *
        inputs.currBatch
      ).toFixed(4)} mL bleach per batch`
    );
    setResult6(
      `${(
        (inputs.totalPH / inputs.totalMix) *
        (inputs.totalMix / inputs.totalPlants) *
        inputs.currBatch
      ).toFixed(4)} mL pH Down per batch`
    );
  };

  return (
    <div style={{ justifyItems: "space-evenly" }}>
      <div>
        <h3>Enter your makeup:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            What is the total volume of your mix makeup in mL?
            <input
              style={{
                marginTop: 1 + "em",
                marginBottom: 2 + "em",
                marginLeft: 2 + "em",
              }}
              type="number"
              name="totalMix"
              value={inputs.totalMix || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            How many total plants are receiving mix?
            <input
              style={style}
              type="number"
              name="totalPlants"
              value={inputs.totalPlants || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            How many plants in your current batch?
            <input
              style={style}
              type="number"
              name="currBatch"
              value={inputs.currBatch || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            How much bleach did you add to the total mix?
            <input
              style={style}
              type="number"
              name="totalBleach"
              value={inputs.totalBleach || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            How much pH Down did you add to the total mix?
            <input
              style={style}
              type="number"
              name="totalPH"
              value={inputs.totalPH || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type="submit" />
        </form>
      </div>
      <div>
        <h3>Here are your results:</h3>
        <p>{result1}</p>
        <p>{result2}</p>
        <p>{result3}</p>
        <p>{result4}</p>
        <p>{result5}</p>
        <p>{result6}</p>
      </div>
    </div>
  );
}
