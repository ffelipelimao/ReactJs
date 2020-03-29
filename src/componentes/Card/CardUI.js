import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const api = {
  baseUrl: "http://localhost:8080/critica/"
};

class CardUI extends Component {
  constructor(props) {
    super(props);
    this.verFilme = this.verFilme.bind(this);
  }

  verFilme() {
    const url = `${api.baseUrl}${this.props.idmovie}`;
    axios.get(url).then(res => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <div className="card text-black mr-5 shadow-lg p-3 mb-5 bg-black rounded shadow p-3 mb-4">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.props.poster} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.props.item}</h5>
                <p className="card-text">{this.props.gender}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.verFilme}
                  data-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Ver Critica
                </button>
                <p className="card-text">
                  <small className="text-muted">{this.props.time}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardUI;
