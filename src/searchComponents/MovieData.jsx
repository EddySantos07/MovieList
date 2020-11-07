import React from "react";
import WatchedMovies from "../DisplayWachedMovies && UnWatched Movies/WatchedMovies.jsx";
import axios from "axios";

class MovieData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
    this.WatchedEventHandler = this.WatchedEventHandler.bind(this);
    this.UnWatchedEventHandler = this.UnWatchedEventHandler.bind(this);
  }

  togglePanel(event) {
    let isOpen = this.state.open;
    this.setState({ open: !isOpen });
  }

  WatchedEventHandler(movieInfo) {
    console.log(movieInfo, "already watched");
    const movieData = movieInfo.props.MovieData;
    // console.log()
    // first check if it is in the UnWatched table
    axios
      .get("/unseenMovies", { movieData })
      .then((data) => {
        console.log(
          data,
          `this is the data from checking unseen table in mysql`
        );
      })
      .catch((err) => {
        console.log(err);
      });
    // if it is delete the movie from UnWatched if not then skip to next step ...

    //check if it is in the watched table
    // if its not in table add it to the watched table
    // / if its already in the table make a pop up message;

    // we then can update the state of seen / unseen movies;
    // which is the line below;
    // console.log(WatchedMovies.prototype.updateWatchedMoviesState());
  }

  UnWatchedEventHandler(movieInfo) {
    console.log(movieInfo, "un watched movie");

    // first check if it is in the Watched table
    // if it is delete the movie from Watched if not then skip to next step ...

    //check if it is in the UnWatched table
    // if its not in table add it to the UnWatched table
    // / if its already in the table make a pop up message;

    // we then can update the state of seen / unseen movies;
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
          onClick={() => {
            this.togglePanel();
          }}
        >
          {title}
        </div>

        <div className={"moviePanel"}>
          {open ? (
            <>
              <button
                onClick={() => {
                  this.WatchedEventHandler(this);
                }}
              >
                {" "}
                add to Watched{" "}
              </button>{" "}

              <button
                onClick={() => {
                  this.UnWatchedEventHandler(this);
                }}
              >
                {" "}
                need to Watch{" "}
              </button>
              <div className={"moviePanelInfo"}>
                <p> Description: {overview} </p>
                <p> Release Date: {release_date} </p>
                <p> imdbRating: {imdbRating} </p>
              </div>
            </>
          ) : null}
        </div>
      </>
    );
  }
}

export default MovieData;
