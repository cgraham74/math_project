
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Answers, { RenderOperands, RenderProblem, RenderScore } from './components/BusinessLogic';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <RenderOperands/>
     <RenderScore />
     <RenderProblem operator = "+" />
     <Answers />
     <Footer />
    </div>
  );
}

export default App;
