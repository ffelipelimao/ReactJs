import React from "react";

const Login = props => {
  return (
    <div className="d-flex justify-content-center align-items-center container">
      <form className="justify-content-center" id="cardfixlogin">
        <div className="form-group">
          <label for="exampleInputEmail1">Endereço de email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Seu email"
          />
          <small id="emailHelp" className="form-text text-muted">
            Nunca vamos compartilhar seu email, com ninguém.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Senha</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Senha"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Login;
