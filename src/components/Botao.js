import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from './Texto';

export default function Botao(params){
    return(
        <TouchableOpacity style={estilos.botao} onPress={()=>{}}>
            <Texto style={estilos.botaoTexto}>{params.texto}</Texto>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    botao:{
        backgroundColor: "#08A045",
        padding: 15,
        marginTop: 10,
        borderRadius:5
    },
    botaoTexto:{
        color:"#fff",
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold",
    }
})