import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



class Banner extends Component {
    render(){
  return (
    <View style={styles.bannerStyle}> 
      <Text style={styles.textStyle}>Authentication</Text>
    </View>
  );
};
}
const styles = StyleSheet.create({
  bannerStyle:{
    height:300,
    backgroundColor:'#7D3C98',
    justifyContent:'center',
    alignItems:'center',

  },
  textStyle:{
      fontSize: 30,
     
      color: 'white',
      
  }
});

export default Banner;
