import "./App.css";
import { useState } from "react";

function App() {
  //Entrada, Rodando, Fim
  const [estado, setEstado] = useState("Entrada");

  //palpite da máquina
  const [palpite, setPalpite] = useState(50);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const iniciarJogo = () => {
    setEstado("Rodando");
    setMin(0);
    setMax(100);
    setNumPalpites(1);
    setPalpite(50);
  };

  const fimDoJogo = () => {
    setEstado("Fim");
  };

  if (estado === "Entrada") {
    return <button onClick={iniciarJogo}>Comećar a Jogar</button>;
  }

  if (estado === "Fim") {
    return (
      <>
        <h1>
          Fim do jogo, a máquina descobriu que seu número era {palpite} em
          apenas {numPalpites} tentativas!
        </h1>{" "}
        <button onClick={iniciarJogo}>Jogar Novamente</button>
      </>
    );
  }

  // 0 <> 100
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

  return (
    <div className="App">
      <p>O seu Número é {palpite}</p>
      <p>Número de Palpites até agora é: {numPalpites}</p>
      <p>Min: {min}</p>
      <p>Max: {max}</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={maior}>Maior!</button>
      <button onClick={fimDoJogo}>Acertou!</button>
    </div>
  );
}

export default App;
