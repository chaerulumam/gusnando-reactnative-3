import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity>
          <LinearGradient
            style={{
              paddingVertical: 30,
              marginHorizontal: 10,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 3,
              marginTop: 20,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#833ab4', '#fd1d1d', '#fcb045']}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
