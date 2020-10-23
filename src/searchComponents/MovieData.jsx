import React from "react";
import WatchedEventHandler from "../AddToWatchedHandler/WatchedEventHandler.jsx";
import WatchEventHandler from "../AddToWatchHandler/WatchEventHandler.jsx";

class MovieData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(event) {
    let isOpen = this.state.open;
    this.setState({ open: !isOpen });
  }

  render() {
    // console.log(this.props.movieData);
    // let { movieData } = this.props;
    const { title } = this.props.movieData;
    const { overview } = this.props.movieData;
    const { release_date } = this.props.movieData;
    const imdbRating = this.props.movieData.vote_average;
    let { open } = this.state;

    return (
      <>
        <div
          className={"movieTitleContainer"}
          onClick={(event) => {
            this.togglePanel(event);
          }}
        >
          {title}
        </div>

        <div className={'moviePanel'}>
          {open ? (
            <React.Fragment>
              <button onClick={ (event, title) => { WatchedEventHandler(event, title) }}> add to Watched </button>{" "}
              <button onClick={ (event) => { WatchEventHandler(event) }}> need to Watch </button>
              <div className={"moviePanelInfo"}>
                <p> Description: {overview} </p>
                <p> Release Date: {release_date} </p>
                <p> imdbRating: {imdbRating} </p>
              </div>
            </React.Fragment>
          ) : null}
        </div>
      </>
    );
  }
}

export default MovieData;
