import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
      super(props);
      this.state = {
          term: '',
      }
  }
  onInputValue = (e) => {
  //  const term = e.target.value;
  //  this.setState({term});
   this.props.onUpdateSearch();
  }

  render() {
    return (
      <input 
        type="text" 
        className="form-control search-input"
        placeholder="Search employee"
        onChange={this.onInputValue}
        value={this.state.term}
        />
    )
  }
}

export default SearchPanel;


