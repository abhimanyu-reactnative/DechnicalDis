import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    onChangeUsername = (text) => {
        this.setState({
            username: text
        })
    }

    onChangePassword = (text) => {
        this.setState({
            password: text
        })
    }

    submit = () => {
        this.props.navigation.navigate('Products')
    }

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.elementContainer}>
                <TextInput 
                    style = {styles.inputStyle}
                    onChangeText = {(text) => this.onChangeUsername(text)}
                    value = {this.state.username}
                />

                <TextInput 
                    style = {styles.inputStyle}
                    onChangeText = {(text) => this.onChangePassword(text)}
                    value = {this.state.password}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.buttonStyle} onPress = {()=> {this.submit()}}>
                    <View >
                        <Text style={{color: "white"}}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    inputStyle: {
        height: 40,
        backgroundColor: 'lightgrey',
        width: "90%",
        padding: 10,
        marginBottom: 10
    },
    buttonStyle: {
        backgroundColor: 'blue',
        width: "90%",
        padding: 10,
        marginTop: 10,
        alignItems: "center"
    },
    elementContainer: {
        flex: 0.5,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }

})

export default Login