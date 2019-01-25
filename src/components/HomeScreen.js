/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import carIcon from '../images/car.png'
import vespaIcon from '../images/vespa.png'
import bicycleIcon from '../images/bicycle.png'
import computerIcon from '../images/computer.png'
import phoneIcon from '../images/phone.png'
import cameraIcon from '../images/camera.png'
import homeIcon from '../images/home.png'
import sofaIcon from '../images/sofa.png'
import tshirtIcon from '../images/t-shirt.png'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    const { navigate } = this.props.navigation;    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        <Text style={styles.blue}>Batik </Text>
          <Text style={styles.blue}>Pekalongan</Text>
        </Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <TouchableOpacity
              style={styles.categoryContainer}
              onPress={() => navigate('Category', { title: 'Batik Tulis', data: 'car'})}
            >
              <Image
                source={tshirtIcon}
                style={styles.icon}
              />
              <Text>Batik Tulis</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.col}>
            <TouchableOpacity
              style={styles.categoryContainer}
              onPress={() => navigate('Category', { title: 'Batik Cetak', data: 'motorcycle'})}
            >
              <Image
                source={tshirtIcon}
                style={styles.icon}
              />
              <Text>Batik Cetak</Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </View>
    );
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    height: 90,
  },
  col: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    textAlign: 'center',
    color: '#333333',
  },
  fake: {
    color: '#5A2F80',
    fontSize: 50,
    fontWeight: 'bold',
  },
  blue: {
    color: '#5A2F80',
    fontSize: 20,
    fontWeight: 'bold',
  },
  green: {
    color: '#BFBD27',
    fontSize: 50,
    fontWeight: 'bold',
  },
  orange: {
    color: '#FD8324',
    fontSize: 50,
    fontWeight: 'bold',
  }
});
