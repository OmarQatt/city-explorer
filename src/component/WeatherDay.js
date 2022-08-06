import { Component}  from 'react'


export default class WeatherDay extends Component {
render() {
return ( 
  <li>{this.props.weatherdata.date} : {this.props.weatherdata.description}</li> 
)
}
}