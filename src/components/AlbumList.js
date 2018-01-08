import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import anxios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    state = { albums: [] }

    //fetch data
    componentWillMount() {
        anxios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }))
    }

    //dobivanje Date od AlbumDetail,
    //obrati paznju na key, inace se ubacije key koji je
    //sam Api proslijedio a u ovom slucaju moze album.title
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        )
    }

    render() {
        console.log(this.setState)

        //vracanje Date
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList