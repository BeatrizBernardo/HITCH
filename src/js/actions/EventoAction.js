import dispatcher from "../dispatcher";


{/** classe para incluir todas as acções relacionadas com eventos */}

//acção para criar um evento
export function createEvento(nomeEvento, dataInicio, local, detalhes) {
  dispatcher.dispatch({
    type: "CREATE_EVENTO",
    nomeEvento, 
    dataInicio, 
    local,
    detalhes,
  });
}

//acção para eliminar um evento
//export function deleteEvento(id) {
  //dispatcher.dispatch({
    //type: "DELETE_TODO",
    //id,
  //});
//}

//acção para substituir eventos
{/*export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 8484848484,
        text: "Go Shopping Again",
        complete: false
      },
      {
        id: 6262627272,
        text: "Hug Wife",
        complete: true
      },
    ]});
  }, 1000);
}*/}
