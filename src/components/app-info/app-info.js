import './app-info.css';

const AppInfo = (score) => {
  const {totalEmployees} = score;
  const {allPremium} = score;
  //Destructuring
  // AppInfo({totalEmployees,allPremium})
  return (
    <div className="app-info">
      <h1>Accounting for employees in the company:</h1>
      <h2>Total number of employees: {totalEmployees}</h2>
      <h2>The award will be received: {allPremium}</h2>
    </div>
  )
}

export default AppInfo;