import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({name, description, icon_name, icon_color, image}) => {
    return (
        <View style={styles.box}>

            <View style={styles.titleContainer}>
                <FontAwesome6
                    name={icon_name}
                    size={24}
                    color={icon_color}
                />

                <Text style={styles.title}>
                    {name}
                </Text>
            </View>

            <Text style={styles.description}>
                {description}
            </Text>

            <Image
                source={image}
                style={styles.image}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10
    },

    description: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },

    image: {
        alignSelf: 'center',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom:10
    }
});

export default Boat;



