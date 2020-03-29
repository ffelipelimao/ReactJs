import React from "react";

const Novo = props => {
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
};

export default Novo;
