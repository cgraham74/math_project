import Header from "./components/Header";
import Footer from "./components/Footer";
import { RenderCheckbox, Begin, StartOver } from "./components/Game"
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <RenderCheckbox />
      <div id="game" className="show-hide">
      <Game />
      </div>
      <Begin />
      <StartOver />
      <Footer />
    </div>

  );
}

export default App;
