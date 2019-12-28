import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet,Image, View } from 'react-native';
import colors from "../style/color";

class TrifScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.texthead}>Ingin ke mana?</Text>
                <Text style={styles.textSubHead}>Mulailah rencanakan petualangan pertama Anda dengan Airbnb</Text>
                <View style={styles.imageContent}>
                <Image style={styles.imageStyle} 
                source = {require("../image/ilustrationperjalanan.png")}
                resizeMode="contain"
                />
                </View>
            </SafeAreaView>
        )
    }
}
export default TrifScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texthead: {
        color: colors.black,
        fontSize: 25
    },
    textSubHead: {
        marginTop: 5,
        width:200,
        textAlign:"center"
    },
    imageStyle:{
        width:300,
        height: 200
    },
    imageContent:{
        width:300,
        height: 200
    }
})