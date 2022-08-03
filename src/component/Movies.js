import { Component} from 'react'



export default class Movies extends Component {
render(){
return (
    
        this.props.movie.map((item ,key) => 
            <div key={key}> 
            <p>{item.title}</p>
            <p>{item.overview}</p>
            <p>{item.vote_average}</p>
            <p>{item.vote_count}</p>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}></img>
            <p>{item.popularity}</p>
            <p>{item.release_date}</p>
                </div>
                )
    
   
)
}
}