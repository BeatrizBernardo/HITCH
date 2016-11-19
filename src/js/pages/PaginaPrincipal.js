import React from "react";

import Utilizador from "../components/Utilizador";
import BoleiasDadas from "../components/BoleiasDadas";
import BoleiasRecebidas from "../components/BoleiasRecebidas";
import MostrarEventos from "../components/MostrarEventos";
import Footer from "../components/Footer";

export default class PaginaPrincipal extends React.Component {
  render(){
    const hitchStyles = {
      color: "red",
    };
    return (
      <div class="container">
        <h1 style={hitchStyles} class="text-center"> HITCH </h1>
        <div> 
          <Utilizador/>
        </div>
        <div> 
          <BoleiasDadas/>
        </div>
        <div> 
          <BoleiasRecebidas/>
        </div>
        <div>
          {/*formlario para procurar eventos*/}
          <form class="form-horizontal">
            <div class="form-group">
              <label for="searchEvent" class="col-sm-2 control-label">Search Event</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="searchEvent" placeholder="Search Event"/>
              </div>
              <button type="submit" class="btn btn-success">Search</button>
            </div>
          </form>
        </div>
        <div> 
          <MostrarEventos/>
        </div>
        <div> 
          <Footer/>
        </div>      
      </div>
    );
  }
}

