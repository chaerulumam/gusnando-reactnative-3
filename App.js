import React, {Component} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text>Hallo Date Picker</Text>
        </TouchableOpacity>
        <DatePicker
          date={this.state.date}
          onDateChange={date =>
            this.setState({date}, () => console.log(this.state.date))
          }
          androidVariant="nativeAndroid"
        />
      </View>
    );
  }
}

export default App;
