import Navbar from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Contact } from "./Components/Contact";
import { Work } from "./Components/Work";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
    <Skills/>
    <Contact/>
    <Work/>
    </div>
  );
}

export default App;
