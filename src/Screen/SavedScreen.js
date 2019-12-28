import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

class SavedScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Saved Screen</Text>
            </SafeAreaView>
        )
    }
}
export default SavedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})