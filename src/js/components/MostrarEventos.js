import React from "react";
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler, IndexLink } from 'react-router';

import PaginaEvento from "../pages/PaginaEvento";
import Evento from "../components/Evento";
import * as EventoAction from "../actions/EventoAction";
import EventoStore from "../stores/EventoStore";

{
    /* Este Component so serve para mostrar os próximos eventos 
    */
}

export default class MostrarEventos extends React.Component {
    constructor(){
        super();
        this.getEventos = this.getEventos.bind(this);
        this.state = {
            eventos: EventoStore.getAll(),
        };
    }
    
    componentWillMount(){
        EventoStore.on("change", this.getEventos);
    }

    componentWillUnmount(){
        EventoStore.removeListener("change", this.getEventos);
    }

    getEventos(){
        this.setState({
            eventos: EventoStore.getAll(),
        });
    }

//    reloadEventos(){
//        EventoAction.reloadEventos();
//    }

/* adoptar o mesmo sistema para boleias dadas e recebidas*/
    render() {
        
        const { eventos } = this.state;
        const EventoComponents = eventos.map((evento) => {
            return <Link to={'paginaEvento'} class="list-group-item" key={evento.id}>
                        <span>   {evento.nomeEvento}   </span>
                        <span>   <i class="fa fa-chevron-right" aria-hidden="true"></i>   </span> 
                        <span>   {evento.dataInicio}   </span>
                        <span>   <i class="fa fa-chevron-right" aria-hidden="true"></i>   </span> 
                        <span>   {evento.local}   </span>
                    </Link>
        });

        return (
            <div class={"list-group"}>
                <a class="list-group-item active">
                    Next Events
                </a>
                { EventoComponents }
                {this.props.children}
            </div>
        );
    }
}