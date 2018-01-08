import React, { Component } from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

//izvlace Date i grupisanje,
const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContaingerStyle,
        headerTextStyle,
        imageStyle
 } = styles

    //sastoji se od prvog dijela (ime title i mala slika) 
    //drugog dijela img
    //treci dio u kojem ima button (Linking salje dir.na web stranicu)
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContaingerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy now
                </Button>
            </CardSection>
        </Card>
    )
}

//obrati paznju na thumbnailStyle i imageStyle gdje navodis specifne upute za img
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContaingerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail