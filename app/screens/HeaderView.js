import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function HeaderView() {
    return (
        <View style={styles.container}>
            <Text style= {styles.text}>Trail
            <Text style={{color: 'blue'}}>Spot</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 10,
        margin: 5,
    },
    text: {
        marginLeft: 10,
        top: 25,
        fontSize: 20,
        
       
    }
})

export default HeaderView;