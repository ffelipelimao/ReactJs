import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { auth } from "./../config_firebase";

class Novo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      isAuthing: true,
      user: null,
    };
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
    if (this.state.isAuthing) {
      return <p>espera ai...</p>;
    }
    if (!this.state.isAuth) {
      return <Redirect to="login" />;
    }
    return (
      <div
        className="d-flex justify-content-right align-items-center container"
        id="cardfixlogin"
      >
        <form>
          <div className="form-group">
            <label for="formGroupExampleInput">Nome do Filme</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">URL da imagem</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Texto</label>
            <textarea
              class="form-control "
              id="exampleFormControlTextarea1"
              rows="30"
            ></textarea>
          </div>
          <div class="row">
            <div class="col">
              <label for="formGroupExampleInput">Direção</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />

              <label for="formGroupExampleInput">Fotografia</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div class="col">
              <label for="formGroupExampleInput">Roteiro</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
              <label for="formGroupExampleInput">Atuação</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
          </div>
          <button type="button" className="btn btn-success mt-4">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default Novo;
