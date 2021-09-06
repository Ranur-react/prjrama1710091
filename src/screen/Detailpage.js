import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {style} from './assets/style';

class Detailpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMahasiswa: [
        {
          nobp: '1710027',
          nama: 'Eko Asri Putra',
          lahir: 'Padang, 15-06-1997',
          foto: require('./images/avatar2.png'),
        },
        {
          nobp: '1710074',
          nama: 'Verdia Charloveen',
          lahir: 'Padang, 09-07-1999',
          foto: require('./images/avatar2.png'),
        },
        {
          nobp: '1710023',
          nama: 'Chendy Anggraini Putri',
          lahir: 'Padang, 13-01-1999',
          foto: require('./images/avatar1.png'),
        },
        {
          nobp: '1710011',
          nama: 'Asri',
          lahir: 'Padang, 15-06-1997',
          foto: require('./images/avatar1.png'),
        },
        {
          nobp: '171002',
          nama: 'Putra',
          lahir: 'Padang, 15-06-1997',
          foto: require('./images/avatar3.png'),
        },
      ],
    };
  }
  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#7FC8A9" barStyle="dark-content" />

        <View style={style.header}>
          <Text style={style.textHeader}>Detail Mahasiswa</Text>
        </View>
        <View style={style.content}>
          <ImageBackground
            source={require('./images/background.jpg')}
            resizeMode="cover"
            style={style.backgroundImage}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={this.props.route.params.foto}
                resizeMode="cover"
                style={{
                  width: 200,
                  height: 200,
                  borderTopLeftRadius: 50,
                  borderBottomLeftRadius: 50,
                }}
              />
              <Text
                style={{color: 'magenta', fontWeight: 'bold', fontSize: 25}}>
                Nobp: {this.props.route.params.nobp}
              </Text>
              <Text
                style={{color: 'magenta', fontWeight: 'bold', fontSize: 25}}>
                Nama Anda: {this.props.route.params.nama}
              </Text>
              <Text
                style={{color: 'magenta', fontWeight: 'bold', fontSize: 25}}>
                Tempat Lahir: {this.props.route.params.lahir}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Detailpage;