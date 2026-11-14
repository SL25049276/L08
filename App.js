import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Boat from './components/Boat.js';

class AllBoats extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>GetABoat</Text>

                <Text style={styles.subtitle}>
                    GetABoat - For Sale
                </Text>

                <ScrollView>
                    <Boat name={"Sea Ray 500 Sundancer"} description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                          icon_name={"ship"} icon_color={"red"} image={require('./img/sea_ray.jpg')} />

                    <Boat name={"Four Winns Horizon 180"} description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                          icon_name={"ship"} icon_color={"grey"} image={require('./img/four_winns.jpg')} />

                    <Boat name={"Flipper 640 ST"} description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                          icon_name={"ship"} icon_color={"blue"} image={require('./img/flipper.jpg')} />

                    <Boat name={"Princess V48"} description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                          icon_name={"ship"} icon_color={"pink"} image={require('./img/princess.jpg')} />

                    <Boat name={"Bayliner 175 BowriderST"} description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                          icon_name={"ship"} icon_color={"purple"} image={require('./img/bayliner.jpg')} />

                    <Boat name={"Fairline Targa 47"} description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                          icon_name={"ship"} icon_color={"green"} image={require('./img/fairline.jpg')} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        marginTop: 30
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },

    subtitle: {
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 20
    }
});

export default AllBoats;


