import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

class TrifScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Trif Screen</Text>
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
    }
})