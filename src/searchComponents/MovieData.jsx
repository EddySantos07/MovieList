import React from "react";

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
    console.log(this.props.movieData);
    // let { movieData } = this.props;
    const { title } = this.props.movieData;
    const { overview } = this.props.movieData;
    const { release_date } = this.props.movieData;
    const imdbRating = this.props.movieData.vote_average;
    let { open } = this.state;

    return (
      <div
        className={"movieTitleContainer"}
        onClick={(event) => {
          this.togglePanel(event);
        }}
      >
        {title}
        {open ? (
          <React.Fragment>
            <button>this is button</button> <button> anotha one</button>
            <div className={"moviePanelInfo"}>
              <p>{overview} </p>
              <p> {release_date} </p>
              <p> {imdbRating} </p>
            </div>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default MovieData;
