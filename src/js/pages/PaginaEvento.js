import React from "react";
import Reactable from "reactable";
import Utilizador from "../components/Utilizador";
import BoleiasDadas from "../components/BoleiasDadas";
import BoleiasRecebidas from "../components/BoleiasRecebidas";
import MostrarEventos from "../components/MostrarEventos";
import Footer from "../components/Footer";

var Table = Reactable.Table;
export default class PaginaEvento extends React.Component {
    
    render() {    
        const tituloDetalhesStyles = {
            color: "red", 
        };

    
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-body" >
                        <h2 style={tituloDetalhesStyles} class="text-center">Ver o Pai Natal</h2>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">Details</div>
                    <div class="panel-body">
                        {/** colocar data de inicio, local, detalhes, etc... */}
                        jsndksndksndknsnksdjnfkjsndfkjndsk
                    </div>
                </div>
                <div>
                    <button class="btn btn-success btn-lg" type="submit">
                        <i class="fa fa-plus-circle" aria-hidden="true"></i> 
                        <span>   Create a Hitch</span>                    
                    </button>
                </div>
                <div>
                    {/**
                        depois de criar a página para criar boleias, elaborar ficheiros do genero do evento, como stores, actions, etc
                        só depois voltar a editar esta parte para mais dimanico do genero do mostrar evento
                     */}

                    <Table className="table table-striped" data={[
                        { "Start Point": 'Coimbra', 
                        "Ranking": 3.4, 
                        "See": <button class="btn btn-success" type="submit">                     
                                    <span>See</span>                    
                                </button> 
                        },
                        { "Start Point": 'Viseu', 
                        "Ranking": 2.4, 
                        "See": <button class="btn btn-success" type="submit">                     
                                    <span>See</span>                    
                                </button> 
                        },
                        { "Start Point": 'Algarve', 
                        "Ranking": 4.8, 
                        "See": <button class="btn btn-success" type="submit">                     
                                    <span>See</span>                    
                                </button> 
                        },
                    ]} />
                </div>
            </div>
        );
    }
}

