import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

const InputField = ({ 
    label, 
    keyboard,
    name
    }) => (
                <View>
                    <Text>{label}</Text>
                        <TextInput 
                            style={styles.input} 
                            keyboardType={keyboard} 
                        />
                </View>  
)

const AddBetComponent = ({
    handleSubmit
}) => (
    <View style={styles.container}>
        <Text>Challenge a Friend</Text>
        <View style={styles.form}>
            <Field 
                keyboardType='default' 
                label='Add a bet description' 
                component={InputField}
                name='description'
            />
            <Field 
                keyboardType='default' 
                label='What do you win?' 
                component={InputField}
                name='wager'
            />
            <Field 
                keyboardType='default' 
                label='Add a Bet Description' 
                component={InputField}
                name='description'
            />
            <TouchableOpacity 
                style ={styles.buttons} 
                onPress={handleSubmit}
            > Submit
            </TouchableOpacity>
        </View>
    </View>
);

const AddBet = reduxForm({
    form: 'addBet'
})(AddBetComponent);

export default AddBet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    input:{

    },
    text: {
      textAlign: 'center',
      color: '#333',
      marginBottom: 5,
    },
    buttons: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 20,
      marginBottom: 30,
    },
  });