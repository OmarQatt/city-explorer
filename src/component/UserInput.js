import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Map from './map.js'
import Weather from './Weather.js';
import Movie from './Movies.js';

class UserInput extends React.Component {
constructor(props) {
  super(props);
  this.state = {

    userFirstName:'',
    userLastName:'',
    userCity: '',
    latitude: '',
    longitude: '',
    displayName: '',
    map:'',
    errorMessage: '',
    displayError: false,
    listOfName:[],
    weather: [],
    isWeather: false,
    movies: [],
    isMovie: false
};
}
handleSubmit = async (e) => {
  e.preventDefault();
const city = e.target.city.value;
  try {
    const key = process.env.REACT_APP_API_KEY;
    const getCity = await axios.get(`https://eu1.locationiq.com/v1/search?key=${key}&q=${e.target.city.value}&format=json`)


    console.log(getCity);
  console.log(getCity.data[0].display_name);
  console.log(getCity.data[0].lat);
  console.log(getCity.data[0].lon);
  
    this.setState({
      userFirstName: e.target.firstName.value,
      userLastName: e.target.lastName.value,
      userCity:e.target.city.value,
      displayName: getCity.data[0].display_name,
      latitude:getCity.data[0].lat,
      longitude:getCity.data[0].lon,
      displayError: false,

      
    });
    this.displayWeather(city,getCity.data[0].lat,getCity.data[0].lon);
    this.displayMovies(city);
  } catch (error){
this.setState({
  displayError: true,
  errorMessage: error.response.status + ':' + error.response.data.error,
  displayName: ''
})

  }

 

}

displayWeather = async(searchQuery,lat , lon) => {
try {
  const weatherData = await axios.get(`https://city-explorer-api-api.herokuapp.com/weather?searchQuery=${searchQuery}&lat=${lat}&lon=${lon}`);
  this.setState({
    isWeather:true,
    weather: weatherData.data
  })
}catch (error) {
  this.setState({
    displayError: true,
    errorMessage: error.response.status +':'+ error.response.data.error,
    isWeather:false,
    displayName:false

  })
 
}
}

displayMovies = async (searchQuery) => {
try {
  const allMovie = await axios.get(`https://city-explorer-api-api.herokuapp.com/movies?searchQuery=${searchQuery}`);
  this.setState({
    movies: allMovie.data,
    isMovie: true
  })
} catch (error) {
  this.setState({
    isMovie:false
  })
}

}

    render() {
     
      
    return(
      <>
      <Form  onSubmit={this.handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            id="firstName"
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            id="lastName"
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" >
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required id="city"/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        
        
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" >
          <Form.Label>Latitude</Form.Label>
          <Form.Control type="text" placeholder={this.state.latitude}  id="latitude"/>
        </Form.Group>
        
        
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" >
          <Form.Label>Longitude</Form.Label>
          <Form.Control type="text" placeholder={this.state.longitude}  id="longitude"/>
        </Form.Group>
        
        
      </Row>
      
      <Button type="submit">Explore!</Button>
      
    </Form>
    {
      this.state.displayError && 
      <div>
             {this.state.errorMessage}
      </div>
 
    }
    {
      this.state.displayName &&
   
   <div>
    <h1>{this.state.displayName}</h1>
    <Map 
    map_src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.latitude},${this.state.longitude}&zoom=5`}
    city={this.state.displayName}
    />
   </div>
  }
  {
    this.state.listOfName.map(item => {
      return (
        <li>{item}</li>
      )
    })
  }
  {this.state.isWeather &&
   <Weather aboutWeather={this.state.weather}/>
   
  }
  {
    this.state.isMovie &&
    <Movie movie={this.state.movies}/>
  }
</>

    )
  
    } 
  }   
  
export default UserInput;
