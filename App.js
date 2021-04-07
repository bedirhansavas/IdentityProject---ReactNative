

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import firebase from 'firebase'
import Banner from './banner'
import Login from './loginForm'

class App extends Component  {
  state= {
    loggedIn: false
  }



  componentDidMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyAtWruYYSrQ_FIqsQgrtuo6mbghNYO3yGE",
        authDomain: "identityproject-acc91.firebaseapp.com",
        databaseURL: "https://identityproject-acc91.firebaseio.com",
        projectId: "identityproject-acc91",
        storageBucket: "",
        messagingSenderId: "640016226428",
        appId: "1:640016226428:web:6de865b6a0734a19"
      });

      firebase.auth().onAuthStateChanged((user) => {
        const loggedIn  = user ? true : false ;
        this.setState({
          loggedIn
        })
      })
      
  }
     
  loginControl(){
    const {loggedIn} = this.state;
    if(loggedIn)
    {
      return(
      <Text>Giris Yapildi</Text>
      )
    }
    else{
      return(
      <Login/>
      )
    }
    }
  render(){
  return (
    
    <View style={styles.appStyle}>
      
      <Banner/>
      
      {this.loginControl()}
    </View>
    
    
  );
};
}
const styles = StyleSheet.create({
  appStyle:{
    flex:1,
    backgroundColor:'#FAD7A0',

  }
});

export default App;
