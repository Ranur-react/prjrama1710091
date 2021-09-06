import {text} from 'body-parser';
import {GatewayTimeout} from 'http-errors';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {style} from './assets/style';

class Detailmovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailMovie: [],
      loading: false,
    };
  }

  ambilDetailData = () => {
    this.setState({loading: true});
    fetch(
      'http://www.omdbapi.com/?apikey=e1100839&i=' +
        this.props.route.params.idmovie,
    )
      .then(response => response.json())
      .then(json => this.setState({detailMovie: json}, () => console.log(json)))
      .catch(err => console.log(err))
      .finally(() => this.setState({loading: false}));
  };
  componentDidMount = () => {
    this.ambilDetailData();
  };
  render() {
    return (
      <View style={gaya.container}>
        {this.state.loading == true ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <View style={gaya.container}>
            <View style={gaya.header}>
              <Text style={gaya.textHeader}>
                {this.state.detailMovie.Title}
              </Text>
            </View>
            <View style={gaya.content}>
              <ScrollView>
                <Text style={gaya.textTitle}>
                  {this.state.detailMovie.Title}
                </Text>
                <Image
                  style={gaya.img}
                  source={{uri: `${this.state.detailMovie.Poster}`}}
                  resizeMode="contain"
                />
                <Text>Tahun : {this.state.detailMovie.Year}</Text>
                <Text>Release : {this.state.detailMovie.Release}</Text>
                <Text>Genre : {this.state.detailMovie.Genre}</Text>
                <Text>Actors : {this.state.detailMovie.Actors}</Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: 'bold',
                    borderBottomWidth: 1,
                    borderBottomColor: '#000',
                  }}>
                  Sinopsis
                </Text>
                <Text>{this.state.detailMovie.Plot}</Text>
              </ScrollView>
            </View>
          </View>
        )}
      </View>
    );
  }
}
export default Detailmovie;

const gaya = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#2A0944',
    paddingHorizontal: 20,
  },
  textHeader: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    flex: 9,
    marginTop: 10,
    marginHorizontal: 10,
    flexWrap: 'nowrap',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  img: {width: 'auto', height: 400, marginVertical: 10},
});
