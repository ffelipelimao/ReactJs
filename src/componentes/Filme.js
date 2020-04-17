import React, { Component } from "react";

import Stars from "./Rating";

class Filme extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="d-flex justify-content-right align-items-center container"
        id="cardfixlogin"
      >
        <div className="form-group">
          <label for="formGroupExampleInput">Filme</label>
          <input
            type="text"
            readonly
            className="form-control"
            id="staticEmail"
            value={this.props.item.name}
          />
          <div className="float-right">
            <Stars nota={this.props.item.geral} />
            <h4>{this.props.item.geral}</h4>
          </div>
          <img
            src={this.props.item.image}
            className="card-img-movie"
            width="250"
            height="300"
            alt="..."
          />
          <textarea
            disabled
            class="form-control "
            id="exampleFormControlTextareaRead"
            rows="30"
            value={this.props.item.conteudo}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Filme;
