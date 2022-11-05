import React, {Component} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        style={{
          flex: 1,
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#833ab4', '#fd1d1d', '#fcb045']}>
        <StatusBar backgroundColor="transparent" translucent />
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          Sign in
        </Text>
      </LinearGradient>
    );
  }
}

export default App;
