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
        <h1 style={hitchStyles}> HITCH </h1>
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
              <label for="inputEmail3" class="col-sm-2 control-label">Search Event</label>
              <div class="col-sm-8">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Search Event"/>
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

