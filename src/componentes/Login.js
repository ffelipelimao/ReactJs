import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { auth } from "./../config_firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.email = null;
    this.senha = null;

    this.state = {
      isAuth: false,
      isAuthing: false,
      error: false,
    };

    this.autenticaUsuario = this.autenticaUsuario.bind(this);
  }

  autenticaUsuario() {
    this.setState({ isAuthing: true, error: false });
    auth
      .signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then((user) => {
        this.setState({ isAuth: true });
      })
      .catch((err) => {
        this.setState({ error: true, isAuthing: false });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({
        isAuthing: false,
        isAuth: !!user,
        user,
      });
    });
  }

  render() {
    if (this.state.isAuth) {
      return <Redirect to="/novofilme" />;
    }
    return (
      <div className="d-flex justify-content-center align-items-center container">
        <div className="justify-content-center" id="cardfixlogin">
          <div className="form-group">
            <label for="exampleInputEmail1">Endereço de email</label>
            <input
              type="email"
              name="email"
              ref={(ref) => (this.email = ref)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Seu email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input
              type="password"
              name="senha"
              ref={(ref) => (this.senha = ref)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
            />
            {this.state.error && (
              <small id="emailHelp" className="form-text text-muted">
                Dados invalidos :(
              </small>
            )}
          </div>
          <button
            type="button"
            disabled={this.state.isAuthing}
            className="btn btn-primary"
            onClick={this.autenticaUsuario}
          >
            Enviar
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
