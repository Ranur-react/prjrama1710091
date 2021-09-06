import React, { Component } from 'react';
import { style } from '../assets/style';
import {
 Text, View, Image
} from 'react-native';
export default function Kotak(props) {
 return (
 <View>
 <View style={style.kotak}>
 <Image source={props.gambar} resizeMode='cover' style={style.img} />
 <View style={{ flex: 1, paddingHorizontal: 10 }}>
 <Text style={style.textNama}>{props.nobp}</Text>
 <Text style={style.textNama}>{props.nama}</Text>
 <Text style={style.textNama}>{props.lahir}</Text>
 </View>
 </View>
 </View>
 );
}
