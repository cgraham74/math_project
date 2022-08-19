import Header from "./components/Header";
import Footer from "./components/Footer";
// import Main from "./components/Main";
import "./App.css";
import { RenderCheckbox } from "./components/RenderCheckbox";
import {Button} from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <RenderCheckbox />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
