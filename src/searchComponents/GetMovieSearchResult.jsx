import React from "react";
import axios from "axios";
import FormatMovieInfo from "./FormatMovieInfo";
import { render } from "react-dom";
import REACT_APP_API_KEY from '../../config/api.js'




class GetMovieSearchResult extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      wordToSearch: '',
      // previousMovies: [],
    };

    this.updatedMovieState = this.updatedMovieState.bind(this);

  }

  dynamicSearch(searchWord) {
    let that = this;

    const getMovieDataAPI = () => {
      return axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=${searchWord}`
        )
        .then((data) => {
          // console.log(data);
          return data.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const resoleveReq = async (response) => {
      // console.log(response)
      const newArr = await Promise.all(response);
      return newArr;
    };

    async function initializeMovieData() {
      let movieData;

      try {
        const getMovieDataReq = await getMovieDataAPI();
        const resolveMovieDataReq = await resoleveReq(getMovieDataReq);
        // console.log(resolveMovieDataReq)
        movieData = resolveMovieDataReq;
      } catch (err) {
        console.log(err);
      } 
      // document.getElementsByClassName("movieListSearchContainer")
      // $('.movieListSearchContainer').remove()
      console.log('removed div?')
      // console.log(document.getElementsByClassName)
      that.setState({ movies: movieData, wordToSearch: searchWord});
    }

    initializeMovieData();
  }

  updatedMovieState(searchWord) {
    let that = this;
    that.dynamicSearch(searchWord);
  }


  render() {

    const { nameToSearch } = this.props;
    const { movies } = this.state;
    const { wordToSearch } = this.state;

    return (
      <div>
        <FormatMovieInfo
          letterToSearch={nameToSearch}
          movieDataArr={movies}
          wordToSearch={wordToSearch}
          // previousMovieDataArr={ previousMovies }
          updateMovies={this.updatedMovieState}
        />
      </div>
    );
  }
}



export default GetMovieSearchResult;
