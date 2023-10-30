/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";

export default function TipCalculator() {
  const [bill, setBill] = useState("");

  const [percentage1, setPersentage1] = useState(0);
  const [percentage2, setPersentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  const handleReset = () => {
    setBill("");
    setPersentage1(0);
    setPersentage2(0);
  };
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage1={percentage1} onSelect={setPersentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage2={percentage2} onSelect={setPersentage2}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />{" "}
        </>
      )}
    </div>
  );
}
