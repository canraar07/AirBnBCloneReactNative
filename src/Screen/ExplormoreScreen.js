import React, { Component } from 'react';
import { SafeAreaView, Text, ImageBackground, ScrollView, View, Image, TextInput, Button, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

class ExplormoreScreen extends Component {
    render() {
        const items = [
            { name: 'Tempat menginap', image: require("../image/hotel.png") }, { name: 'Pengalaman', image: require("../image/pengalaman.png") },
        ];
        const items2 = [
            { name: 'Bandung', hotel: 'Hotel A', image: require("../image/hotela.png"), harga:'Rp. 1000.000' }, { name: 'Jakarta', hotel: 'Hotel B', image: require("../image/hotelb.png" ), harga:'Rp. 1100.000' },
            { name: 'Yogya', hotel: 'Hotel C', image: require("../image/hotelc.png"), harga:'Rp. 1300.000' }, { name: 'Malang', hotel: 'Hotel D', image: require("../image/hoteld.png"), harga:'Rp. 1500.000'},
        ];
        return (
            <SafeAreaView style={styles.container}>
                <View
                    style={{
                        backgroundColor: "white",
                        height: 80,
                        borderBottomWidth: 1,
                        borderBottomColor: "#dddddd"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            padding: 10,
                            marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: "black",
                            shadowOpacity: 0.2
                        }}
                    >
                        <Image
                            source={require("../image/search.png")}
                            style={{ height: 20, width: 20, marginTop: 15, marginRight: 10 }}
                        />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Coba Jakarta"
                            placeholderTextColor="grey"
                            style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
                        />
                    </View>
                </View>
                <ScrollView style={styles.container}>
                    <Text style={styles.textTitle}>Anda ingin dibantu menemukan apa?</Text>
                    <FlatGrid
                        itemDimension={125}
                        items={items}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <ImageBackground source={item.image} style={[styles.itemContainer]} imageStyle={{ borderRadius: 6 }}>
                                <Text style={styles.itemName}>{item.name}</Text>
                            </ImageBackground>
                        )}
                    />
                    <Text style={styles.textTitle}>Pengalaman yang dinilai tinggi</Text>
                    <Text style={styles.textsubTitle}>Pesan aktivitas yang dipandu para tuan rumah lokal pada perjalanan Anda berikutnya</Text>
                    <FlatGrid
                        itemDimension={125}
                        items={items2}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <View style={[styles.itemContainer2, { backgroundColor: '#fff' }]}>
                                <ImageBackground
                                    source={item.image}
                                    imageStyle={{ borderRadius: 6 }}
                                    style={{ height: 100, width: 173 }}>
                                </ImageBackground>
                                <Text style={styles.itemGridText}>{item.name}</Text>
                                <Text style={styles.itemGridText2}>{item.hotel}</Text>
                                <Text style={styles.itemGridText2}>{item.harga}</Text>
                            </View>
                        )}
                    />
                    <Button
                    title = "Tampilkan semua pengalaman"
                    color="#2ecc71"
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}
export default ExplormoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 10,
        padding: 10,
        height: 150,
    },
    itemContainer2: {
        borderRadius: 5,
        padding: 10,
        height: 200,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    textTitle: {
        fontSize: 25,
        color: '#000',
        marginLeft: 10,
        marginTop: 25
    },
    textsubTitle: {
        fontSize: 17,
        marginLeft: 10,
        marginTop: 5
    },
    itemGridText: {
        fontSize: 8,
        color: '#000',
        fontWeight: '600',
        marginTop: 5
    },
    itemGridText2: {
        fontSize: 12,
        color: '#000',
        fontWeight: '600',
        marginTop: 5
    },
})