import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class Detailpage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20}}>
          {' '}
          Halaman Detail Again
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Back To Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Kembali Kehalaman Sebelumnya</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Detailpage2;