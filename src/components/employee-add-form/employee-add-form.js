import {Component} from 'react';
import './employee-add-form.css';

class EmployeeAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onInputValue = (e) => {
       if (e.target.value.length === 0) console.log('wrong')
       else {
            this.setState({
                [e.target.name]: e.target.value
             })
        }
    }   
    
    onSubmit = (e) => {
        e.preventDefault()
        this.props.addSubmit(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

   render() {
    const {name,salary} = this.state;
    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="What are their names?" 
                    onChange={this.onInputValue}
                    name ="name"
                    value ={name}
                    />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary in dollars" 
                    onChange={this.onInputValue}
                    name ="salary"
                    value={salary}
                    />

                <button type="submit"
                        className="btn btn-outline-light"
                        >Add
                        </button>
            </form>
        </div>
    )
   }
}

export default EmployeeAddForm;