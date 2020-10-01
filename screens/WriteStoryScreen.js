import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  render(){
  return (
    <View>
     <Header       
      backgroundColor={"#1F89DC"}
      centerComponent={{text:'Story Hub',style:{color:'white',fontSize:20}}}
       />

       <TextInput
       style =  {styles.textInput}
       placeholder="Title"
       />
       <TextInput
       style =  {styles.textInput1}
       placeholder="Author"
       />
       <TextInput
       style =  {styles.textInput2}
       placeholder="Write Story Here"
       multiline =  {true}
       />
       <TouchableOpacity
        style={styles.button}
       >
      
         <Text
         style={{color: '#ffffff', fontSize: 30, textAlign: 'center'}}
         >Submit</Text>
       </TouchableOpacity>
    </View>
  );
  }

}

const styles = StyleSheet.create({
 textInput:{
    borderWidth : 3,
    fontSize : 30,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 20
 },
 textInput1:{
  borderWidth : 3,
  fontSize : 30,
  alignSelf: 'center',
  textAlign: 'center',
  width: 500,
  margin: 20
},
textInput2:{
  borderWidth : 3,
  fontSize : 20,
  width: 900,
  margin: 20,
  height: 400,
  alignSelf: 'center'
},
button:{
  backgroundColor : '#3f2a4b',
  height: 40,
  width: 150,
  alignSelf: 'center'
}
});
