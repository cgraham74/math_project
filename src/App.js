import Header from "./components/Header";
import Footer from "./components/Footer";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="game">
        <Game />
      </div>
      <Footer />
    </div>
  );
}

export default App;
