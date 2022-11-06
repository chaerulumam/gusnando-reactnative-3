import React, {Component} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
var Spinner = require('react-native-spinkit');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Spinner
          style={{marginBottom: 50}}
          isVisible={true}
          size={25}
          type={'Wave'}
          color={'#212121'}
        />
      </View>
    );
  }
}

export default App;
