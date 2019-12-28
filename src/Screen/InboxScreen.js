import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import colors from "../style/color";

class InboxScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.texthead}>Kotak Masuk</Text>
                <Text style={styles.textSubHead}>Pesan dari tuan rumah akan muncul di sini</Text>
                <Image style={styles.imageStyle} 
                source = {require("../image/noinbox.png")}
                />
            </SafeAreaView>
        )
    }
}
export default InboxScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    texthead: {
        color: colors.black,
        fontSize: 25,
        marginTop: 40,
        marginLeft: 15
    },
    textSubHead: {
        marginTop: 5,
        marginLeft: 15
    },
    imageStyle:{
        marginLeft: 0,
        width : 300,
        height: 300
    }
})