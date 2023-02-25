import React from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function Texto({ children, style}) {
    let [fontsLoaded] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }
    return <Text style={[style, estilos.texto]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
    }
})