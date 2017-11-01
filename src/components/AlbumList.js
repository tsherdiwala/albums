import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

    componentDidMount() {
         // eslint-disable-next-line
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((responseData) => this.setState({ albums: responseData }));
    }

    render() {
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    }
}

export default AlbumList;
