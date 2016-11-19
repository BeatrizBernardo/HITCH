import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class EventoStore extends EventEmitter {
    constructor() {
        super()
        //lista default de eventos a apresentar
        this.eventos = [
            {
                id: 181120161222,
                nomeEvento: "Ver o Pai Natal",
                dataInicio: "24/12/2016",
                local: "Serra da Estrela",
                detalhes: "Ver o pai natal à Serra da Estrela"
            },
            {
                id: 181120161223,
                nomeEvento: "Montar Arvore de Natal",
                dataInicio: "08/12/2016",
                local: "Coimbra",
                detalhes: "montar a arvore de natal na Praça da Republica"
            },
            {
                id: 181120161227,
                nomeEvento: "Passagem de Ano",
                dataInicio: "31/12/2016",
                local: "Figueira da Foz",
                detalhes: "Passagem de ano na praia da Figueira da Foz"
            },
            {
                id: 181120161624,
                nomeEvento: "Ano Novo",
                dataInicio: "01/01/2017",
                local: "Coimbra",
                detalhes: "Ano Novo no DEI"
            },
        ];
    }

    //criar um evento e adiciona-lo a lista de eventos presente no construtor 
    createEvento(nomeEvento, dataInicio, local, detalhes) {
        const id = Date.now();

        this.eventos.push({
            id,
            nomeEvento,
            dataInicio,
            local,
            detalhes,
        });

        this.emit("change");
    }

    //função para retornar todos os eventos presentes
    getAll() {
        return this.eventos;
    }

    //função para manipular as acções sobre os eventos
    handleActions(action) {
        switch (action.type) {
            case "CREATE_EVENTO": {
                this.createEvento(action.nomeEvento, action.dataInicio, action.local, action.detalhes);
                break;
            }
            //case "RECEIVE_EVENTOS": {
              //  this.eventos = action.eventos;
              //  this.emit("change");
              //  break;
            //}
        }
    }

}

const eventoStore = new EventoStore;
dispatcher.register(eventoStore.handleActions.bind(eventoStore));

export default eventoStore;
