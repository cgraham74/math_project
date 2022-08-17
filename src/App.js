
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Answers, { RenderOperands, RenderScore } from './components/BusinessLogic';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <RenderOperands/>
     <RenderScore />
     <Answers />
     <Footer />
    </div>
  );
}

export default App;
