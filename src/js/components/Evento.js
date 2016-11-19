import React from "react";

{/* para a criação de um Evento será necessário:
        id do evento
        nome do Evento
        data de inicio
        data de fim
        hora de inicio
        hora de fim
        local do evento
        detalhes do Evento
        ---- para questões de simplificação (por agora) só usar id, nome, data inicio, local, detalhes
*/}

export default class Evento extends React.Component {
    constructor(props){
        super();
    }
    render(){
        const { id, nomeEvento, dataInicio, local, detalhes } = this.props;

        return(
            <li>
                <span>{nomeEvento}</span>
                <span>{dataInicio}</span>
                <span>{local}</span>
            </li>
        );
    }

}