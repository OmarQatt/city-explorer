import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';



class UserInput extends React.Component {
constructor(props) {
  super(props);
  this.state = {

    userFirstName:'',
    userLastName:'',
    userCity: '',
    latitude: '',
    longitude: '',
};
}
handleSubmit = async (e) => {
  e.preventDefault();
const key = process.env.REACT_APP_API_KEY;
  const getCity = await axios.get(`https://eu1.locationiq.com/v1/search?key=${key}&q=${e.target.city.value}&format=json`)
  console.log(getCity);
console.log(getCity.data.display_name);
console.log(getCity.data[0].lat);
console.log(getCity.data[1].lon);

  this.setState({
    userFirstName: e.target.firstName.value,
    userLastName: e.target.lastName.value,
    userCity:e.target.city.value
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
          <Form.Control type="text" placeholder="Latitude"  id="latitude"/>
          <Form.Control.Feedback >
           Latitude.
          </Form.Control.Feedback>
        </Form.Group>
        
        
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" >
          <Form.Label>Longitude</Form.Label>
          <Form.Control type="text" placeholder="Longitude"  id="longitude"/>
          <Form.Control.Feedback >
            Longitude.
          </Form.Control.Feedback>
        </Form.Group>
        
        
      </Row>
      
      <Button type="submit">Explore!</Button>
    </Form>
    {/* <Row xs={1} md={4} className="g-4" >
  {
      this.getCity.map((item,i )=>(          <Col key={i}> 
        <li key={i}>
              <span> name : {this.getCity.data[0].display_name}</span>
            </li> 
        
        </Col>  
))
    }
</Row> */}
</>
    )
  
    } 
  }   
  
export default UserInput;