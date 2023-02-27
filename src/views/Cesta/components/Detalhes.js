import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native'

import Texto from "../../../components/Texto";
import Botao from '../../../components/Botao';

export default function Detalhes({ detalhes }){
    return <>
        <View style={estilos.infoCesta}>
            <Texto style={estilos.nomeCesta}>{detalhes.nome}</Texto>
            <View style={estilos.infoFazenda}>
                <Texto style={estilos.infoFazendaTitulo}>{detalhes.nomeFazenda}</Texto>
                <Image source={detalhes.logoFazenda} style={estilos.infoFazendaLogo} />
            </View>
            <Texto style={estilos.infoFazendaDescricao}>{detalhes.descricao}</Texto>
            <Texto style={estilos.infoFazendaPreco}>{detalhes.preco}</Texto>
            <Botao texto={detalhes.botao} /> 
        </View>
    </>
}

const estilos = StyleSheet.create({
    nomeCesta:{
        fontSize:25,
        fontWeight:"bold",
    },
    infoCesta:{
        padding:15,
    },
    infoFazenda:{
        flexDirection:"row-reverse",
        alignItems:"center",
        justifyContent:"flex-end",
        height:100,
    },
    infoFazendaLogo:{
        width:"15%",
        height:"60%",
        marginRight:10,
    },
    infoFazendaTitulo:{
        fontSize:20,
        color:"#464646",
        fontWeight:"bold",
    },
    infoFazendaDescricao:{
        fontSize:16,
        color:"#a6a6a8",
        lineHeight:25,
    },
    infoFazendaPreco:{
        fontSize:25,
        color:"#08A045",
        paddingTop:20,
        fontWeight:"bold",
    },
    
})