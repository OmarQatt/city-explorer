import { Component}  from 'react'

export default class HoldDataMovie extends Component {
render() {
    return (
        <div key={this.props.keymovie}> 
        <p>{this.props.dataMovie.title}</p>
        <p>{this.props.dataMovie.overview}</p>
        <p>{this.props.dataMovie.vote_average}</p>
        <p>{this.props.dataMovie.vote_count}</p>
        <img src={`https://image.tmdb.org/t/p/w500${this.props.dataMovie.poster_path}`}></img>
        <p>{this.props.dataMovie.popularity}</p>
        <p>{this.props.dataMovie.release_date}</p>
            </div>
    )
}
}