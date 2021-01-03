import './App.css';
import About from './Component/about';
import Devsm from './Component/devsm';
import Hero from './Component/Hero';
import Serv from './Component/serv';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Devsm/>
      <Serv/>
    </div>
  );
}

export default App;
