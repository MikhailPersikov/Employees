import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';
import HomeWork from '../home-work/home-work';

import './app.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[
        {name: 'Pete', surname: 'Harris', salary: 1400, increase: true ,id: 1},
        {name: 'John', surname: 'Davis', salary: 3800, increase: true ,id: 2},
        {name: 'Kyle', surname: 'Young' ,salary: 200, increase: false ,id: 3},
        {name: 'Mike', surname: 'Dorge' ,salary: 300, increase: true ,id: 4},
        {name: 'Susan', surname: 'Quatro' ,salary: 900, increase: false ,id: 5},
      ]
    }
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
        onDelete={id => console.log(id)}/>
  
        <EmployeeAddForm/>
        <HomeWork/>
      </div>
    ) 
  }  
}
export default App;