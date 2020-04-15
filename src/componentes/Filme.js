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
          <label for="formGroupExampleInput">{this.props.search}</label>
          <input
            type="text"
            readonly
            className="form-control"
            id="staticEmail"
            value="Coringa"
          />
          <div className="float-right">
            <Stars />
            <h4>4.87/5</h4>
          </div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
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
            value="Coringa é BOM, mas Taxi Driver e melhor"
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Filme;
