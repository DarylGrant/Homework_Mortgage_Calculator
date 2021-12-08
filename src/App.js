import React from 'react';
import MortgageContainer from "./containers/MortgageContainer";
import './App.css';

function App() {
  return (
    <>
      <h1>Mortgage Calculator</h1>
      <MortgageContainer inputSalary={inputSalary} />
    </>
  );
}

export default App;
