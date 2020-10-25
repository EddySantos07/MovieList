import React from 'react';

class SeenMovies extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
        this.updateSeenMoviesState = this.updateSeenMoviesState.bind(this);
    }

    updateSeenMoviesState() {
        console.log('updating Seen Movies State');
    }

    componentDidMount() {
        // do something to query the db and set state to what ever  Seen movies has

    }

    render() {
        return <div>

        </div>
    }
}

export default SeenMovies;