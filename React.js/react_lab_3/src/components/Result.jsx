import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ input }) => {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData.annualInvestment[0];
    
    return <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Inverstment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Captial</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map(yearData => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;

                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{yearData.year}</td>
                    <td>{yearData.year}</td>
                </tr>
            })}
        </tbody>
    </table>;
}

export default Result;