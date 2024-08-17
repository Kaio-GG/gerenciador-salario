import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";


export default function Login(): React.ReactElement {
    const { fonts } = useTheme(); 

    return (
        <View style={styles.fundo}>
            <View style={styles.card}>
                <Text style={[styles.texto, { fontFamily: fonts.medium }]}>Cadastro</Text>
                <TextInput 
                    style={[styles.input, { fontFamily: fonts.regular }]}
                    placeholder="Coloque seu Nome"    
                    placeholderTextColor={'#fff'}
                />
                <TextInput 
                    style={[styles.input, { fontFamily: fonts.regular }]}
                    placeholder="Coloque seu E-mail"
                    placeholderTextColor={'#fff'}
                />
                <TextInput 
                    style={[styles.input, { fontFamily: fonts.regular }]}
                    placeholder="Coloque sua senha"
                    placeholderTextColor={'#fff'}    
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.textButton, { fontFamily: fonts.medium }]}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#171717',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#151515',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 55,
        height: 700,
        width: 400,
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 2
    },
    texto: {
        fontSize: 25,
        color: '#fff',
    },
    input: {
        height: 40,
        padding: 10,
        width: 300,
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 14,
    },
    button: {
        backgroundColor: '#171717',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 2
    },
    textButton: {
        fontSize: 15,
        color: '#fff',
    }
});
