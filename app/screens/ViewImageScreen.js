import React from 'react';
import {Image, View, StyleSheet} from "react-native";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/chair.jpg')} resizeMode="contain" />
        </View>
    );
}
const styles = StyleSheet.create( {
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    }
});
export default ViewImageScreen;
