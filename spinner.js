import React, {Component} from 'react';
import {
 StyleSheet,
  View,
  Text,
    ActivityIndicator,
} from 'react-native';


const Spinner = () => {
    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator/>
        </View>
    )
}

const styles = StyleSheet.create({
  spinnerStyle:{
    
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    
  },
  
});

export default Spinner;
