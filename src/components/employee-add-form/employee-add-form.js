import {Component} from 'react';
import './employee-add-form.css';

class EmployeeAddForm extends Component {
    construnctor(props){
        this.super(props);
        this.state = {
            name: '123',
            salary: '123123',
        }
    }

    onInputValue = (e) => {
       this.setState({
       [e.target.name]: e.target.value
       })
    }   
    
   render() {
    // const {name,salary} = this.state;
    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="What are their names?" 
                    onChange={this.onInputValue}
                    name ="name"
                    // value ={name}
                    />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary in dollars" 
                    onChange={this.onInputValue}
                    // name ="salary"
                    />

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
   }
}

export default EmployeeAddForm;