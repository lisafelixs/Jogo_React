import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./bootstrap.min.css";
import "./bootstrap.min.js";
//componene: funcional component
function App() {
  //Entrada, Rodando, Fim
  const [estado, setEstado] = useState("ENTRADA");

  //palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  //0<>300
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setPalpite(150);
    setNumPalpites(1);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="container">
        <center>
          <div className="margem">
            <p>Escolha um número entre 0 e 300!</p>
            <p>Escolheu? Então vamos começar...</p>
            <button className="btn btn-primary" onClick={iniciarJogo}>
              Começar
            </button>
          </div>
        </center>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div className="container">
        <center>
          <div className="margem">
            <p>
              Acertei o número {palpite} com {numPalpites} chutes!
            </p>
            <button className="btn btn-primary" onClick={iniciarJogo}>
              Jogar Novamente
            </button>
          </div>
        </center>
      </div>
    );
  }

  return (
    <div className="container">
      <center>
        <div className="App">
          <div className="margem">
            <p>O seu número é {palpite}?</p>
            <button className="btn btn-outline-primary" onClick={menor}>
              {" "}
              Menor
            </button>
            <button className="btn btn-outline-success" onClick={acertou}>
              Acertou!
            </button>
            <button className="btn btn-outline-primary" onClick={maior}>
              Maior
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
