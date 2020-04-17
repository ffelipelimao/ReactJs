import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import { auth } from "./../config_firebase";

const api = {
  baseUrl: "http://localhost:8080/critica/",
};

class Novo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      isAuthing: true,
      user: null,
    };
    this.gravaFilme = this.gravaFilme.bind(this);
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

  gravaFilme(e) {
    const filme = {
      name: this.name.value,
      image: this.image.value,
      genero: this.genero.value,
      conteudo: this.conteudo.value,
      nota: {
        direcao: this.direcao.value,
        fotografia: this.fotografia.value,
        atuacao: this.atuacao.value,
        roteiro: this.roteiro.value,
      },
    };
    axios
      .post(api.baseUrl, filme)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
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
        <form onSubmit={this.gravaFilme}>
          <div className="form-group">
            <label for="formGroupExampleInput">Nome do Filme</label>
            <input
              type="text"
              ref={(ref) => (this.name = ref)}
              className="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Genero</label>
            <input
              type="text"
              ref={(ref) => (this.genero = ref)}
              className="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">URL da imagem</label>
            <input
              type="text"
              ref={(ref) => (this.image = ref)}
              className="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Texto</label>
            <textarea
              class="form-control "
              ref={(ref) => (this.conteudo = ref)}
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
                ref={(ref) => (this.direcao = ref)}
                id="formGroupExampleInput"
              />

              <label for="formGroupExampleInput">Fotografia</label>
              <input
                type="text"
                className="form-control"
                ref={(ref) => (this.fotografia = ref)}
                id="formGroupExampleInput"
              />
            </div>
            <div class="col">
              <label for="formGroupExampleInput">Roteiro</label>
              <input
                type="text"
                className="form-control"
                ref={(ref) => (this.roteiro = ref)}
                id="formGroupExampleInput"
              />
              <label for="formGroupExampleInput">Atuação</label>
              <input
                type="text"
                className="form-control"
                ref={(ref) => (this.atuacao = ref)}
                id="formGroupExampleInput"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-4">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default Novo;
