import React from "react";
import { ScrollView } from 'react-native'
import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Itens from "./components/Itens";

export default function Cesta({ topo, detalhes, itens }) {
    return <ScrollView>
        <Topo {...topo} />
        <Detalhes detalhes={detalhes} />
        <Itens {...itens} />
    </ScrollView>
}