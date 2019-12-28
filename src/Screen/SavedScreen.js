import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View } from 'react-native';
import colors from "../style/color";

class SavedScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.texthead}>Tersimpan</Text>
                <Text style={styles.textSubHead}>Kumpulkan tempat menginap dan kegiatan menarik dengan mengetuk ikon hati</Text>
                <View style={styles.imageContent}>
                <Image style={styles.imageStyle} 
                source = {require("../image/ilustrationsave.png")}
                resizeMode="contain"
                />
                </View>
            </SafeAreaView>
        )
    }
}
export default SavedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    texthead: {
        color: colors.black,
        fontSize: 25,
        marginTop: 40,
        marginLeft: 15
    },
    textSubHead: {
        marginTop: 5,
        marginLeft: 15,
        width: 400
    },
    imageStyle:{
        marginLeft: 15,
        width:300,
        height: 200
    },
    imageContent:{
        width:300,
        height: 300
    }
})