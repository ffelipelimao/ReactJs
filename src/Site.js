import React from "react";

const Site = props => {
  return (
    <div>
      {/*imagem com o menu de fundo*/}
      <nav className="navbar navbar-light">
        <a classNameName="navbar-brand" href="#">
          <img
            src="icon.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Burn
        </a>
      </nav>
      {/*menu com nav*/}
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link d-inline-block" href="#">
            Ativo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-inline-block" href="#">
            Link nav muito mais longo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-inline-block" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-inline-block" href="#">
            Desativado
          </a>
        </li>
      </ul>

      {/*criei um container pra começar a brincar com grid*/}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row mr-5 mt-5">
              {/*primeiro grid*/}

              <div
                className="card  text-black mr-5 shadow-lg p-3 mb-5 bg-black rounded shadow p-3 mb-5 rounded"
                style={"max-width: 550px;"}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="godfather.jpg" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="button"
                        aria-pressed="false"
                        autocomplete="off"
                      >
                        Única alternância
                      </button>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*segunda grid*/}
              <div
                className="card text-black mr-5 shadow p-3 mb-5 bg-white rounded shadow p-3 mb-5 bg-white rounded"
                style={"max-width: 550px;"}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="godfather.jpg" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="button"
                        aria-pressed="false"
                        autocomplete="off"
                      >
                        Única alternância
                      </button>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*fecha a div de linhas*/}
          </div>
          {/*fecha a div de colunas*/}

          <div className="col">
            <div className="row mr-5 mt-5">
              {/*terceira grid*/}
              <div
                className="card text-black mr-5 shadow p-3 mb-5 bg-white rounded"
                style={"max-width: 550px;"}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="godfather.jpg" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="button"
                        aria-pressed="false"
                        autocomplete="off"
                      >
                        Única alternância
                      </button>
                      <p className="card-text ">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*quarta grid*/}
              <div
                className="card text-black mr-5 shadow p-3 mb-5 bg-white rounded"
                style={"max-width: 550px;"}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="godfather.jpg" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="button"
                        aria-pressed="false"
                        autocomplete="off"
                      >
                        Única alternância
                      </button>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Site;
