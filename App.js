import React, {Component} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-toast-message';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showToastNotification = () => {
    Toast.show({
      type: 'info',
      text1: 'Hello',
      text2: 'This is some something 👋',
    });
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Toast />
        <TouchableOpacity onPress={() => this.showToastNotification()}>
          <Text>Hello World</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
