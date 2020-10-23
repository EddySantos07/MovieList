import React from "react";
import axios from "axios";
import GetMovieSearchResult from "./searchComponents/GetMovieSearchResult.jsx";
// import key from '../config/api.js';
// console.log(process.env.REACT_APP_API_KEY)
// const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(...props) {
    super(...props);
    // console.log(this)

    this.state = {
      textField: "",
      movies: [],
    };
    // this.dynamicSearch = this.dynamicSearch.bind(this);
  }

  handleTextFieldOnChange(event) {
    {
      /* we are grabbing the event and then setting the state to the new value taht has been typed in */
    }
    this.setState({ textField: event.target.value });
  }

  render() {
    // console.log('rerendered')
    return (  
      <div>
        <div className="searchBar">
          <input
            type="text"
            value={this.state.textField}
            onChange={this.handleTextFieldOnChange.bind(this)}
            placeholder="Search for Movie!"
          />
          {/* this adds a new line blank line */}
          <br></br>
          <h3> Movies List:</h3>
           <GetMovieSearchResult nameToSearch={this.state.textField} />
        </div>

        {/* <DisplayList movies={this.props.movies}/> */}
      </div>
    );
  }
}

export default App;
