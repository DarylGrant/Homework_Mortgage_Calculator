const MortgageForm = ({mortgageSubmit}) => {

    const [inputSalary, setInputSalary] = useState(0);

    const handleSalaryChange = (evt) =>
    setInputSalary(evt.target.value);

}
   
handleFormSubmit = (evt) => {
    evt.preventDefault();
    const salaryToSubmit = inputSalary.trim();
    if (!salaryToSubmit) {
        return
    }

    mortgageSubmit({
        inputSalary: salaryToSubmit
    });

    setInputSalary();
}

return(
    <form onSubmit={SalaryToSubmit}>
        <input
        type="number"
        placeholder="Your salary"
        value={inputSalary}
        onChange={handleSalaryChange}
        />
        <input
        type="submit"
        value="Calculate"
        />
    </form>
)

export default MortgageForm;