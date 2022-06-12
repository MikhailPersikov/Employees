import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data:[
        {name: 'Pete', salary: 1400, increase: true ,id: 1},
        {name: 'John', salary: 3800, increase: true ,id: 2},
        {name: 'Kyle', salary: 200, increase: false ,id: 3},
        {name: 'Mike', salary: 300, increase: true ,id: 4},
        {name: 'Susan', salary: 900, increase: false ,id: 5},
      ]
    }
    this.maxId = 4; 
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
     const newArr = data.filter(el => el.id !== id)
     return {
      data: newArr
     }
    })
  }

  addSubmit = (name, salary) => {
     const newEmployee = {
      name,
      salary,
      increase: false,
      id:this.maxId +1,
     }
     this.setState(({data}) => {
      const newArray = [...data,newEmployee]
      return {
        data: newArray
      }
     })
  }

  render() {
    return (
      <div className="app">
        <AppInfo/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeeList 
        data={this.state.data}
        onDelete={this.deleteItem}
       />
  
        <EmployeeAddForm
        addSubmit={this.addSubmit}/>
      </div>
    ) 
  }  
}

export default App;