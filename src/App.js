
import './App.css';
import { NavBar} from './component/NavBar' ;
import { Banner} from './component/Banner' ;
import { Projects } from './component/projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './component/Skills';
import {Contact } from './component/Contact';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
     
    </div>
  );
}

export default App;
