import react, { Component } from "react"


class MultiMovieList extends Component {


    state = {
        movielist: [
            { movie: "nanban", actor: "vijay", rating: "5star" },
            { movie: "raayan", actor: "danush", rating: "4star" },
            { movie: "singam-2", actor: "suriya", rating: "3star" },
            { movie: "36 vayathiniley", actor: "jothika", rating: "4star" }
        ]
    }
    render() {
        return (
            <div style={{display:"flex",margin:5,padding:5}}>
                {this.state.movielist.map((item) => (
                    <div>
                        <h1>{item.movie}</h1>
                        <h2>{item.actor}</h2>
                        <h3>{item.rating}</h3>
                    </div>
                )
                )
                }


            </div>
        )
    }
}

export default MultiMovieList