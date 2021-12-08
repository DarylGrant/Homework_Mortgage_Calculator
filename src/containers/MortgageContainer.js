import React, { useEffect, useState } from 'react';
import MortgageForm from "../components/MortgageForm";
import MortgageResult from "../components/MortgageResult";

function MortgageContainer() {
    const [salary, setSalary] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(() => {
        setResult(salary * 3);

    },[salary]);

    return(
        <>
        <h1>Mortgage Calculator</h1>
        <MortgageForm mortgageSubmit={(setResult)}/>

        </>
    )

    


}

export default MortgageContainer;