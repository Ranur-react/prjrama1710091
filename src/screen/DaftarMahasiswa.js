import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { style } from './assets/style';
import {Kotak} from './components/kotak';
import Detailpage from './Detailpage';



class DaftarMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataMahasiswa: [
            {
                nobp : '1710091',
                nama : 'Ramahan nuari',
                lahir : 'Padang, 15-06-1997',
                foto : require('./images/avatar2.png')
            },
            {
               nobp : '1710071',
               nama : 'tuti',
               lahir : 'Padang, 09-07-1999',
               foto : require('./images/avatar2.png')
           },
           {
               nobp : '1710001',
               nama : 'pablo',
               lahir : 'Padang, 13-01-1999',
               foto : require('./images/avatar1.png')
           },
           {
               nobp : '1710011',
               nama : 'soet',
               lahir : 'Padang, 15-06-1997',
               foto : require('./images/avatar1.png')
           },
           {
               nobp : '171002',
               nama : 'Putra',
               lahir : 'Padang, 15-06-1997',
               foto : require('./images/avatar3.png')
           }
          ],
        };
    }
    render() {
        return (
          <View style={style.container}>
            <StatusBar backgroundColor="#7FC8A9" barStyle="dark-content" />

            <View style={style.header}>
              <Text style={style.textHeader}>Daftar Mahasiswa</Text>
            </View>
            <View style={style.content}>
              <ImageBackground
                source={require('./images/background.jpg')}
                resizeMode="cover"
                style={style.backgroundImage}>
                <FlatList
                  data={this.state.dataMahasiswa}
                  keyExtractor={item => item.nobp}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={style.kotak}
                      onPress={() =>
                        this.props.navigation.navigate('Detail', {
                          nobp: item.nobp,
                          nama: item.nama,
                          lahir: item.lahir,
                          foto: item.foto,
                        })
                      }>
                      <Image
                        source={item.foto}
                        resizeMode="cover"
                        style={style.img}
                      />
                      <View
                        style={{paddingHorizontal: 75, paddingVertical: 30}}>
                        <Text style={style.textNama}>{item.nobp}</Text>
                        {/* <Text style={style.textNama}>{item.nama}</Text>
                        <Text style={style.textNama}>{item.lahir}</Text> */}
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </ImageBackground>
            </View>
          </View>
        );
    }
}
export default DaftarMahasiswa;
