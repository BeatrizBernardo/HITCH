import React from "react";

{
    /* Este Component so serve para mostrar os próximos eventos 
    */
}

export default class MostrarEventos extends React.Component {

  render() {
    
    return (
        <div class="list-group">
            <a href="#" class="list-group-item active">
                Next Events
            </a>
            <a href="#" class="list-group-item">Ver o Pai Natal</a>
            <a href="#" class="list-group-item">Passagem de Ano</a>
            <a href="#" class="list-group-item">Fazer árvore de Natal</a>
        </div>
    );
  }
}
