import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Googlemap from '../component/googlemap.js'



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
    map:''
};
}
handleSubmit = async (e) => {
  e.preventDefault();
const key = process.env.REACT_APP_API_KEY;
  const getCity = await axios.get(`https://eu1.locationiq.com/v1/search?key=${key}&q=${e.target.city.value}&format=json`)
  // const keyMap = process.env.Googlemap_API_KEY;
  // const getMap = await axios.get(`https://maps.googleapis.com/maps/api/js?key=${keyMap}&callback=initMap`)
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
    longitude:getCity.data[0].lon
    
  });
  console.log({
    userFirstName: e.target.firstName.value,
    userLastName: e.target.lastName.value,
    userCity:e.target.city.value,
  })

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
      <Googlemap/>
    </Form>
   <div>
    <h1>{this.state.displayName}</h1>
    
   </div>
 
</>

    )
  
    } 
  }   
  
export default UserInput;
