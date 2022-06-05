import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button 
        className="btn btn-light"
        type="button">
          All employee
      </button>
      <button 
        className="btn btn-outlilne-light"
        type="button">
          For a promotion
      </button>
      <button 
        className="btn btn-outlilne-light"
        type="button">
          Salary more 1000$
      </button>
    </div>
  )
}

export default AppFilter;