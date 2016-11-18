import React from "react";

{/* para a criação de um Evento será necessário:
        nome do Evento
        data de inicio
        data de fim
        hora de inicio
        hora de fim
        detalhes do Evento
        ---- para questões de simplificação (por agora) só usar nome, data inicio, detalhes
*/}

export default class Evento extends React.Component {
    constructor(props){
        super();
    }
    render(){
        const { nomeEvento, dataInicio, detalhes } = this.props;

        return(
            <li>
                <span>{nomeEvento}</span>
                <span>{dataInicio}</span>
                <span>{detalhes}</span>
            </li>
        );
    }

}