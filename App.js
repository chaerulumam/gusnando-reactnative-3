import React, {Component} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Snackbar from 'react-native-snackbar';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showNotification = () => {
    Snackbar.show({
      text: 'Hello World',
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: 'UNDO',
        textColor: 'green',
        onPress: () => {
          /* Do something. */
          console.log('Undo clicked');
        },
      },
    });
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.showNotification()}>
          <Text>Hello World</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
