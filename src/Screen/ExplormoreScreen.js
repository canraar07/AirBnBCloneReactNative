import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

class ExplormoreScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Explore Screen</Text>
            </SafeAreaView>
        )
    }
}
export default ExplormoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})