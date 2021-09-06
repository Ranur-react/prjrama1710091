import React, { Component } from 'react'
import {Text, TouchableOpacity, View, ImageBackground, StyleSheet, Image } from 'react-native';
import Detailpage from './Detailpage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> Halaman Home</Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DaftarMahasiswa')
              }>
              <Text>Daftar Mahasiswa</Text>
            </TouchableOpacity>
          </View>
        );
    }
}

export default HomeScreen;