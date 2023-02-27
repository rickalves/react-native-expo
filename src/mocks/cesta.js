import logo from "../../assets/logo.png" 

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo:{
        titulo: "Detalhe da Cesta",
    },
    detalhes:{
        nome: "Cesta de Verduras",
        nomeFazenda: "Jenny Jack Farm",
        logoFazenda: logo,
        descricao: "Uma cesta de verduras com produtos selecionadas cuidadosamente da fazenda direto para sua mesa.",
        preco: "R$ 30,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
      }
}

export default cesta;