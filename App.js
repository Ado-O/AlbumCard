import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

//app <= Header  (header)
//    <= AlbumList   <=  AlbumDetail <= Card (radi style card)
//                                   <=  CardSection (style unutar card)


