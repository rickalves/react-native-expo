import React from 'react'
import Texto from '../../../components/Texto'
import { Image, View, FlatList, SafeAreaView, StyleSheet } from 'react-native'

export default function Itens({ titulo, lista }) {
    const Item = ({ nome, imagem }) => (
        <View style={estilos.item}>
            <Image source={imagem} style={estilos.itemImagem}/>
            <Texto style={estilos.itemTexto}>{nome}</Texto>
        </View>
    );

    return (
        <SafeAreaView>
            <Texto style={estilos.titulo}>{titulo}</Texto>
            <FlatList
                data={lista}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={item => item.nome}
            />
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#00D500',
        paddingVertical:10,
        paddingHorizontal: 5,

    },
    itemTexto:{
        fontSize:18,
    },
    itemImagem:{
        marginRight:20,
    },
    titulo:{
        fontSize:20,
        fontWeight: 'bold',
    }
})