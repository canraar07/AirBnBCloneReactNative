import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

class ProfileScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Profile Screen</Text>
            </SafeAreaView>
        )
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})