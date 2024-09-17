import React, { Component } from "react";


class MovieList extends Component{
    render(){
        return(
            <div>
                <h1>movie:{this.props.moviename}</h1>
                <h1>actor:{this.props.actor}</h1>
            </div>
        )
    }
}

export default MovieList