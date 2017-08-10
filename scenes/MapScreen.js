import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import { Button } from 'react-native-elements';

class MapScreen extends Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.04,
      longitudeDelta: 0.09,
    }
  }

  async componentDidMount(){
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if(status === 'granted'){
      let { coords } = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      this.setState({
        region: {
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.09,
        }
      });
    }
    else{
      alert('Getting your location was not allowed so California it is!');
    }
  }

  onRegionChange = (region) => {
    console.log(region);
    this.setState({ region });
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 18 }}>
        <MapView
          style = {{ flex: 1 }}
          region = { this.state.region }
          onRegionChange = { this.onRegionChange }
        />
      </View>
    )
  }
}

export default MapScreen;