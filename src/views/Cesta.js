import React from "react";
import { Image, StyleSheet, Dimensions, Text, View} from "react-native";

const width = Dimensions.get("screen").width
import topo from "../../assets/topo.png"
import fazendaLogo from "../../assets/logo.png" 
import Texto from "../components/Texto";

export default function Cesta() {
    
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhes da cesta.</Text>
        <View style={estilos.infoCesta}>
            <Text style={estilos.nomeCesta}>Cesta de Verduras</Text>
            <View style={estilos.infoFazenda}>
                <Text style={estilos.infoFazendaTitulo}>Jenny Jack Farm</Text>
                <Image source={fazendaLogo} style={estilos.infoFazendaLogo} />
            </View>
            <Texto style={estilos.infoFazendaDescricao}>
                Uma cesta de verdura com produtos selecionados
                cuidadosamente da fazenda direto para a sua cozinha.
            </Texto>
            <Text style={estilos.infoFazendaPreco}>R$ 40,00</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        color:"#ffffff",
        fontSize:25,
        paddingTop:20,
        fontWeight:"500",
    },
    nomeCesta:{
        fontSize:25,
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
        fontWeight:"600",
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
});