import React from 'react';

const MovieData = ({ movieData }) => {
    console.log(movieData)
    const movieName = movieData.title;
    return (
        <div className={'individualMovieContainer'}>
           {movieName};
        </div>
    )
}

export default MovieData;