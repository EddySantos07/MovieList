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

  async WatchedEventHandler(movieInfo) {
    console.log(movieInfo, "already watched");
    const movieData = movieInfo.props.movieData;

    const unseen_movies = "unseen_movies";
    const seen_movies = "seen_movies";
    // console.log(movieData)
    // first check if it is in the UnWatched table
    console.log(' TESTT')
    let checkMovieInWatchedQuery = await checkIfMovieIsInTable();
    // console.log(checkMovieInWatchedQuery)
    if ( checkMovieInWatchedQuery.data === true ) {

      console.log(`movie is already in watched!`, checkMovieInWatchedQuery.data,'??');
      return;
    } else {
      console.log('movie is not in saved???')
      axios
        .post("/unseenMovies", { movie: movieData })
        .then((data) => {
          console.log(
            data.data,
            `this is the data from checking unseen table in mysql`
          );
          const isUnseenMovie = data.data;

          if (isUnseenMovie === false) {
            addToSeenTable();
          } else if (isUnseenMovie === true) {
            deleteUnSeenMovieInTable();
            addToSeenTable();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    async function checkIfMovieIsInTable() {
      let queryResult;
      const endPointQuery = await axios
        .post('/checkIfMovieExistsInTable', {
          movie: movieData,
          table: seen_movies,
        })
        .then((result) => {
          console.log(result);
          queryResult = result;
        })
        .catch((err) => {
          console.log(err);
        });
      return queryResult;
    }

    async function addToSeenTable() {
      let result;
      const endPointQuery = await axios
        .post("/addToSeenMovies", { movie: movieData })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
      return result;
    }

    async function deleteUnSeenMovieInTable() {
      let result;
      const endPointQuery = await axios
        .post("/addToSeenMovies", { movie: movieData })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
      return result;
    }
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
