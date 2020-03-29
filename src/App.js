import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Menu from "./componentes/Menu";
import Login from "./componentes/Login";
import Novo from "./componentes/Novo";
import Filme from "./componentes/Filme";
import CardPOS from "./componentes/Card/CardPOS";
import ListUI from "./componentes/List/ListUI";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Route path="/" component={CardPOS} exact />
        <Route path="/lista" component={ListUI} />
        <Route path="/login" component={Login} />
        <Route path="/novofilme" component={Novo} />
        <Route path="/filme" component={Filme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
