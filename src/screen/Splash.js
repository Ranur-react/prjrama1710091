import { StackActions } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems:'center',
      },
    tinyLogo: {
      width: 200,
      height: 250,
      justifyContent:'center',
      alignItems: 'center',
    },
  });

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('DaftarMahasiswa'))
        }, 3000);  
    };
 
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/background.jpg')} resizeMode="cover" style={styles.image}>
                <Image style={styles.tinyLogo}
              source={require('./images/jayanusa.png')}
            />
    </ImageBackground>
            
            </View>
        );
    }
}

export default Splash;