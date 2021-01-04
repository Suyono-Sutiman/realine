import './App.css';
import About from './Component/about';
import Chal from './Component/chal';
import Devsm from './Component/devsm';
import Foot from './Component/foot';
import Hero from './Component/Hero';
import Serv from './Component/serv';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Devsm/>
      <Serv/>
      <Chal/>
      <Foot/>
    </div>
  );
}

export default App;
