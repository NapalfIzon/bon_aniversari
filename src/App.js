import face01 from "./images/face01.png";
import face02 from "./images/face02.png";
import flowers from "./images/flowers.png";
import "./App.css";

function App() {
  return (
    <main className="main">
      <div className="face-container">
        <img src={face01} className="head" alt="logo" />
        <img src={face02} className="head" alt="logo" />
      </div>
      <img src={flowers} alt="El teu ram de flors" />
      <a
        className="link"
        href="https://youtu.be/vGJTaP6anOU"
        target="_blank"
        rel="noopener noreferrer"
      >
        FELIZ ANIVERSARI!
      </a>
    </main>
  );
}

export default App;
