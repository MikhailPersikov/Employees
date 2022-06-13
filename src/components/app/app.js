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
        {name: 'Pete', salary: 1400, increase: true , rise: true, id: 1},
        {name: 'John', salary: 3800, increase: true , rise: false, id: 2},
        {name: 'Kyle', salary: 200, increase: false , rise: false, id: 3},
        {name: 'Mike', salary: 300, increase: true , rise: false, id: 4},
        {name: 'Susan', salary: 900, increase: false , rise: false, id: 5},
      ]
    }
    this.maxId = 5; 
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
      rise: false,
      id: ++this.maxId,
     }
     this.setState(({data}) => {
      if(newEmployee.name.length < 1) {
        console.log('WARNING')
      } else {
        const newArray = [...data,newEmployee]
        return {
          data: newArray
        }
      }     
     })
  }

  // onToggleIncrease = (id) => {
  //   this.setState(({data})=> {

  //     // const foundIndex = data.findIndex(el => el.id === id);
  //     // const oldArr = data[foundIndex]
  //     // const newItem = {...oldArr,increase: !oldArr.increase}
  //     // const newArr = [...data.slice(0,foundIndex), newItem , ...data.slice(foundIndex+1)]
  //     // return {
  //     //   data:newArr
  //     // }

  //     // const foundIndex = data.findIndex(el => el.id === id);
  //     // const newArr = data.map((el,index) => {
  //     //   if(index === foundIndex) {
  //     //     return {...el, increase: !el.increase}
  //     //   } else {return el}
  //     // })
  //     // return { data:newArr }

  //     // this.setState(({data})=> ({
  //     //   data: data.map(item => {
  //     //     if(item.id === id) {
  //     //       return {...item, increase: !item.increase}
  //     //     }
  //     //     return item
  //     //   })
  //     // })
      
  //     const newArr = data.map(el => {
  //       if(el.id === id) {
  //         return {...el, increase: !el.increase}
  //       } else {return el}
  //     })
  //     return { data:newArr }
  //   })
  // }

  onToggleProp = (id,prop) => {
    this.setState(({data}) => ({
      data: data.map(el => {
        if(el.id === id) {
          return {...el, [prop]: !el[prop]}
        } 
        return el
      })
    }))
  }

  render() {
    const employees = this.state.data.length;
    const premium = this.state.data.filter(el => el.increase === true).length
    return (
      <div className="app">
        <AppInfo
        totalEmployees={employees}
        allPremium={premium}
        />
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeeList 
        data={this.state.data}
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}
       />
  
        <EmployeeAddForm
        addSubmit={this.addSubmit}/>
      </div>
    ) 
  }  
}

// const a = new App('test');
// console.log(a.totalEmployees())

export default App;