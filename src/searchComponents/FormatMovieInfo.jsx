import MovieData from "./MovieData.jsx";
import React from "react";
import { render } from "react-dom";
import $ from 'jquery';

const FormatMovieInfo = (props) => {
    // console.log(props);
  let { letterToSearch } = props;
  let { movieDataArr } = props;
  let { wordToSearch } = props;
  // let { previousMovieDataArr } = props;
  let { updateMovies } = props;
  if ( letterToSearch.length === 0 || movieDataArr === undefined) {
    return null;
  }

  if ( letterToSearch !== wordToSearch ) {
    // console.log('in if statement', movieDataArr)
    updateMovies(letterToSearch);
    return null;
  }
  // console.log(props);

  return (
    <div className={"movieListSearchContainer"}>
      {movieDataArr.map((movieData, index) => {
        
        return <MovieData movieData={movieData} key={index}/>;
      })}
    </div>
  );

};

export default FormatMovieInfo;
