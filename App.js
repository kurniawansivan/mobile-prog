import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {useState} from 'react'
import {Home} from './Components'


export default function App() {
  const [textFirstName, setTextFirstName] = useState('');
  const [textLastName, setTextLastName] = useState('');
  const [textEmail, setTextEmail] = useState('');
  const [textUsername, setTextUsername] = useState('');
  const [textPassword, setTextPassword] = useState('');
  const [textConfirmPassword, setTextConfirmPassword] = useState('');
  const [showdata, setshowdata] = useState(false);
  if (showdata) {
    return <Home
    firstname={textFirstName}
    lastname={textLastName}
    email={textEmail}
    username={textUsername}
    password={textPassword}
    confirmPassword={textConfirmPassword}
  />
  }

  return (
    <View style={styles.view} >
    <Text style={styles.register}>Register</Text>
    <View>
    <Text style={styles.text} >FirstName</Text>
    <TextInput style={styles.textInput} placeholder="" onChangeText={value => setTextFirstName(value)}/>
    <Text style={styles.text} >LastName</Text>
    <TextInput style={styles.textInput} placeholder="" onChangeText={value => setTextLastName(value)}/>
    <Text style={styles.text} >Email</Text>
    <TextInput style={styles.textInput} placeholder="" onChangeText={value => setTextEmail(value)}/>
    <Text style={styles.text} >Username</Text>
    <TextInput style={styles.textInput} placeholder="" onChangeText={value => setTextUsername(value)}/>
    <Text style={styles.text} >Enter Password:</Text>
    <TextInput style={styles.textInput} placeholder="" onChangeText={value => setTextPassword(value)}/>
    <Text style={styles.text} >Confirm Password</Text>
    <TextInput style={styles.textInput} placeholder="" onChangeText={value => setTextConfirmPassword(value)}/>
    </View>
    <View>
    <Button onPress={()=>{
        setshowdata(true)
    }}
    title="Register"
    color="blue"
    />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
 textInput:{
   marginTop: 5,
   marginBottom: 20,
   borderWidth: 1,
   borderColor: "grey",
 },
 register:{
  marginTop: 25,
  textAlign: 'center',
  fontSize: 20,
  marginBottom: 20,

 },
 view:{
   marginHorizontal: 35,
 },
 text:{
  fontSize: 17,
 }
});