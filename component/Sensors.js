import React from "react";
import {View,Text,StyleSheet} from 'react-native';



const Sensor=()=>{
    const styles=StyleSheet.create({
        title:{
            textAlign:'center',
            justifyContent:'center',
            marginTop:300,
        }
    })
    return(
        <View>
            <Text style={styles.title}>Hello There!....</Text>
        </View>
    )
}
export default Sensor;