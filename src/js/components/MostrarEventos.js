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
            <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
            <a href="#" class="list-group-item">Morbi leo risus</a>
            <a href="#" class="list-group-item">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item">Vestibulum at eros</a>
        </div>
    );
  }
}
