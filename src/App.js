import React from "react";
import axios from "axios";
import GetMovieSearchResult from "./searchComponents/GetMovieSearchResult.jsx";

class App extends React.Component {
  constructor(...props) {
    super(...props);

    this.state = {
      textField: "",
      movies: [],
    };
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
        <div className={"searchBar"}>
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

        <div className={"seen"}>
          
        </div>

        <div className={"want to see"}></div>
      </div>
    );
  }
}

export default App;
