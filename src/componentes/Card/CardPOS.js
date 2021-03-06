import React, { Component } from "react";
import axios from "axios";

import CardUI from "./CardUI";
import Filme from "../Filme";

const api = {
  baseUrl: "http://localhost:8080/critica/",
};

class CardPos extends Component {
  constructor() {
    super();
    this.state = {
      selecionado: null,
      select: false,
      filmes: [],
    };

    this.verSelect = this.verSelect.bind(this);
  }

  verSelect(value) {
    console.log(value);
    this.setState({ select: true, selecionado: value });
  }

  componentDidMount() {
    axios.get(api.baseUrl).then((res) => {
      console.log(res);
      this.setState({ filmes: res.data });
    });
  }

  render() {
    const { filmes } = this.state;
    return (
      <div className="container" id="cardMain">
        {this.state.select ? (
          <div className="row">
            <Filme item={this.state.selecionado} />
          </div>
        ) : (
          <div className="row">
            {filmes.map((name) => (
              <div className="col-5">
                <div className="row mr-5" id="cardfix">
                  <CardUI
                    verselect={this.verSelect}
                    idmovie={name._id}
                    item={name.name}
                    gender={name.genero}
                    poster={name.image}
                    time={name.diferenca}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default CardPos;
