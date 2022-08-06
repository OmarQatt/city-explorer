import { Component} from 'react'
import React, { useEffect,useState } from 'react';
import HoldDataMovie from './HoldDataMovie'


 class Movies extends Component {
render(){
return (
    
        this.props.movie.map((item,key ) => 
           <HoldDataMovie dataMovie={item} keymovie={key}/>
                )
    
   
)
}
}
export default Movies;