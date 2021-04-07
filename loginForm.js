import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput
} from 'react-native';
import firebase from 'firebase'
import Spinner from './spinner';
class Login extends Component {
    
    state ={
        email:'',
        password:'',
        error: '',
        loading: false,
    }

   
    onButtonClicked(){
        const{ email,password}=this.state;
        this.setState({
            error:'',
            loading: true
        })
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.loginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.loginSuccess.bind(this))
            .catch(this.loginFail.bind(this))
            });
      
    }
    loginSuccess(){
      this.setState({
        email:'',
        password:'',
        error: '',
      })
    };
    loginFail(){
      this.setState({
        error:'Authentication Failed!!!'
    });
  }
    render(){
        const {error,loading} =this.state;
        const errorMessage = error ? (
            <Text style={styles.errorStyle}>
                {error}
            </Text>
        ) : 
        null;

        /*
        const loginButton = loading ? (
            <Spinner />
        ) :
        (
            <Button title='Login'
          color="#FF4E4E"
          onPress={this.onButtonClicked.bind(this)}
          />
        ); */
  return (
    <View style={styles.loginStyle}> 
      <View style={styles.emailStyle}>
            <Text style={styles.textStyle}>E-Mail</Text>  
          <TextInput style={styles.inputStyle} 
          placeholder={'Enter E-mail'}
          onChangeText={ (text) => {
          this.setState({
              email: text
          })
          }}
          value={this.state.email}
          />
        </View>
      <View style={styles.passwordStyle}>
          <Text style={styles.textStyle}>Password</Text>
          <TextInput style={styles.inputStyle} 
          placeholder={'Enter Password'}
          secureTextEntry
          onChangeText={ (text) => {
            this.setState({
                password: text
            })
            }}
            value={this.state.password}
          />
          </View>

            {errorMessage}

      <View style={styles.buttonStyle}>
          <Button title='Login'
          color="#FF4E4E"
          onPress={this.onButtonClicked.bind(this)}
          />
        
        </View>
           
    </View>
  );
};
}
const styles = StyleSheet.create({
  
loginStyle:{

padding:30,
},
emailStyle:{
    flexDirection:'row',
    
    width:'auto',
    borderColor:'#FF4E4E',
    borderBottomWidth:1,
    alignItems:'center',
},
textStyle:{
   paddingLeft:20,
    fontSize:17,
},
inputStyle:{
    fontSize:17,
    marginLeft:35,
   
},

  passwordStyle:{
    flexDirection:'row',
    
    width:'auto',
    borderColor:'#FF4E4E',
    borderBottomWidth:1,
    alignItems:'center',
  },
      buttonStyle:{
        marginTop:20,
        
      },

      errorStyle:{
          color:'red',
          fontSize:17,
          paddingTop:5,
          alignSelf:'center',
      }
  
});

export default Login;