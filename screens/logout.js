import React from "react";
import { Text,View,StyleSheet } from "react-native";
import firebase from "firebase";

export default class Logout extends React.Component{
    componentDidMount(){
        firebase.auth().signOut()
        this.props.navigation.navigate("Login")
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Logout</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})