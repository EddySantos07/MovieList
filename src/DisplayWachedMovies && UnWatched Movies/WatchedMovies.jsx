import React, { useState, useEffect } from "react";

// class WatchedMovies extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {

//         }
//         this.updateSeenMoviesState = this.updateSeenMoviesState.bind(this);
//     }

//     updateWatchedMoviesState() {
//         console.log('updating Seen Movies State');
//     }

//     componentDidMount() {
//         // do something to query the db and set state to what ever  Seen movies has

//     }

//     render() {
//         return
//         <div>

//         </div>
//     }
// }

function WatchedMovies() {
  const [
    WatchedMoviesList,
    setMovieList,
  ] = useState(/* have to figure out what state first */ 'no movies');

  //   function updateWatchedMoviesState () {
  //     console.log('UPDATING WATCHED MOVIES STATE');
  //   }

  WatchedMovies.prototype.updateWatchedMoviesState = () => {
    console.log("UPDATING WATCHED MOVIES STATE");
    console.log(`this is currently ${WatchedMoviesList} before state updaate`);
    setMovieList('TARZAN');
    console.log( `after updating state ${WatchedMoviesList}`)
  };

  useEffect(() => {
    // querys db for movies from order in the way they were saved;
  });

  // return 'this is WATCHED MOVIES';
 return <div>this is WATCHED MOVIES and this is state - {WatchedMoviesList}</div>;
}

export default WatchedMovies;
