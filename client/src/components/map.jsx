import React, {Component} from 'react';
import {Col, Row} from 'antd';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'


/**
 * Facility Map
 */
const lat = 40.741669
const lng = -73.820770
console.log(lng)
console.log(lat)

class map extends React.Component{

  constructor(props) {
    super(props);
    this.state = {locations: []}; 
  }

  //set page title
  componentWillMount = () => {
    document.title = ""
  }
  
  render(){
    return(
      <MapContainer
        google={this.props.google}
      />
    )
  }
  
}

class MapContainer extends Component{
  componentDidMount() {
    this.loadMap(); // call loadMap function to load the google map
    this.loadMarkers();
  }

  componentDidUpdate(){
      this.loadMap(); // call loadMap function to load the google map
      this.loadMarkers();
  }
  loadMarkers(){
    const {google} = this.props;
    //console.log(locations);
    /*locations.forEach( (v, i) =>{
      var index = i+1;
      var marker =new google.maps.Marker({
        position: {lat: parseFloat(v.latitude), 
                  lng: parseFloat(v.longitude),
                }, // sets position of marker to specified location
        label: index.toString(),
        map: this.map, // sets markers to appear on the map we just created on line 35
        title: v.hospital_name,
      });
      marker.setMap(this.map);
    })*/
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const centerNode = {lat: parseFloat(lat), lng: parseFloat(lng)};

      const mapConfig = Object.assign({}, {
        center: centerNode,
        zoom: 14, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
  
      var marker =new google.maps.Marker({
        position: centerNode, // sets position of marker to specified location
        icon: {
          url: "/my_location.png",
          anchor: new google.maps.Point(24,24),
          scaledSize: new google.maps.Size(24,24),
        },
        map: this.map, // sets markers to appear on the map we just created on line 35
      });
      marker.setMap(this.map);

      var trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(this.map);
    }
  }

  loadExtras(){
    //this.state.locations.forEach(location => { // iterate through locations saved in state
      /*const marker = new google.maps.Marker({
        position: {lat: location.latitude, lng: location.longitude}, // sets position of marker to specified location
        map: this.map, // sets markers to appear on the map we just created on line 35
        title: location.name // the title of the marker is set to the name of the location
      });*/
  }
  

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }
    return (
      <Row>
        <Col md={12}>
          <div ref="map" style={style}>
            loading map...
          </div>
        </Col>
      </Row>
    );
  }
}

export default withRouter(GoogleApiWrapper({
  apiKey: "AIzaSyDbvmQGBFexX5Dk0nbbVJ-sIq3QOtprm7M",
})(map))
