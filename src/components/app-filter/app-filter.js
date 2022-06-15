import './app-filter.css';
import { Component } from 'react';

class  AppFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      rise: '',
      salary: '',
    }
  }
  employeesFilter = () => {
    this.props.onUpdateFilter(this.props.data)
  }

  render() {
    return (
      <div className="btn-group">
        <button 
          className="btn btn-light"
          type="button">
            All employee
        </button>
        <button 
          className="btn btn-outlilne-light"
          type="button"
          onClick={this.employeesFilter}
          >
            For a promotion
        </button>
        <button 
          className="btn btn-outlilne-light"
          type="button"
          onClick={this.employeesFilter}
          >
            Salary more 1000$
        </button>
      </div>
    )
  }
}

export default AppFilter;