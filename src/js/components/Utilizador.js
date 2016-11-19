import React from "react";

{
    /* Este Component so serve para mostrar os dados do Utilizador na pagina principal
        Nome
        Ranking
        fotografia
    */
}

export default class Utilizador extends React.Component {
  render() {
    const nomeUtilizadorStyles = {
      marginTop: "30px",
    };

    const uriFoto = '../images/foto_1.jpg'; 
    const nomeUtilizador = "Jane Doe";
    const rankingUtilizador = "4.6";
    return (
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="row">
                    {/* para a fotografia */}
                    <div class="col-md-4">  
                        {/*<Image source={{uri: uriFoto}} />*/}
                        <img src={uriFoto} class="img-circle" />
                    </div>

                    {/* para o nome e Ranking */}
                    <div class="col-md-8">
                        <h3> { nomeUtilizador } </h3>
                        <h3>
                            <span> Ranking: { rankingUtilizador } </span> 
                            <span> <i class="fa fa-star" aria-hidden="true"> </i> </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
}
