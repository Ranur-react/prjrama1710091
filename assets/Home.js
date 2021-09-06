import React, {Component} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
} from 'react-native';
import {style} from './assets/style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: '',
      dataMovie: [],
    };
  }

  ambilData = () => {
    fetch('http://www.omdbapi.com/?apikey=e1100839&s=' + this.state.searchData)
      .then(response => response.json())
      .then(json =>
        this.setState({dataMovie: json.Search}, () => console.log(json)),
      )
      .catch(err => console.log(err));
  };

  //   componentDidMount() {
  //     this.ambilData();
  //   }

  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle="light-content" backgroundColor="#93B5C6" />
        <View style={style.header}>
          <Text style={style.textHeader}> IMDB Movie</Text>
        </View>
        <View style={style.content}>
          <View style={style.input}>
            <TextInput
              style={style.inputText}
              placeholder="Search Movie"
              onChangeText={value => this.setState({searchData: value})}
            />

            <TouchableOpacity
              style={style.buttonSearch}
              onPress={() => this.ambilData()}>
              <Text style={style.textButton}>Cari</Text>
            </TouchableOpacity>
          </View>

          <View style={style.flatlist}>
            <FlatList
              data={this.state.dataMovie}
              keyExtractor={item => item.imdbID}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginVertical: 5,
                    borderBottomWidth: 2,
                    borderBottomColor: '#000',
                  }}
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {
                      idmovie: item.imdbID,
                    })
                  }>
                  <View>
                    <Image
                      source={{uri: `${item.Poster}`}}
                      style={{
                        width: 100,
                        height: 150,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexWrap: 'nowrap',
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        marginBottom: 20,
                      }}>
                      {item.Title}
                    </Text>
                    <Text>{item.Title}</Text>
                    <Text>{item.Year}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            {/* <FlatList
              data={this.state.dataMovie}
              keyExtractor={item => item.imdbID}
              renderItem={({item, Search}) => (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginVertical: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: '#000',
                  }}
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {
                      idmovie: item.imdbID,
                    })
                  }>
                  <View>
                    <Image
                      source={{uri: `${item.Poster}`}}
                      style={{
                        width: 100,
                        height: 150,
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexWrap: 'nowrap',
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        marginBottom: 20,
                      }}>
                      {item.Title}
                    </Text>
                    <Text>{item.Title}</Text>
                    <Text>{item.Year}</Text>
                  </View>
                </TouchableOpacity>
              )}
            /> */}
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
