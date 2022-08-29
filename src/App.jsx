import './App.css';
import { Navbar } from './components/Navbar';
import { Pages } from './Pages/Pages';
import {Home} from "./Pages/Home"
import {Login} from "./Pages/Login"

function App() {
  return (
    <div>
      <Navbar />
      <Pages />
    </div>
  );
}

export default App;

