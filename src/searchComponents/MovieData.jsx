import React from "react";

class MovieData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
    this.watchedEventHandler = this.watchedEventHandler.bind(this);
    this.UnWatchedEventHandler = this.UnWatchedEventHandler.bind(this);
  }

  togglePanel(event) {
    let isOpen = this.state.open;
    this.setState({ open: !isOpen });
  }

  watchedEventHandler(movieInfo) {
    console.log(movieInfo,'already watched')
  }

  UnWatchedEventHandler(movieInfo) {
    console.log(movieInfo,'un watched movie')
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

        <div className={'moviePanel'}> 
          {open ? (
            <React.Fragment>
              <button onClick={ () => { this.watchedEventHandler(this) }}> add to Watched </button>{" "}
              <button onClick={ () => { this.UnWatchedEventHandler(this) }}> need to Watch </button>
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
