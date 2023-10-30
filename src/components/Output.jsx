/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} + (${tip} tip)
    </h3>
  );
}
