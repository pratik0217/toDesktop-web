import "./App.css";
import Navbar from "./component/navbar";
import navbarLogo from './assets/asset\ 0.png'
import developerToggle from './assets/asset\ 1.svg'


function App() {
  return (
    <>
      <header>
        <Navbar navbarLogo={navbarLogo} developerToggle={developerToggle}/>
      </header>
    </>
  );
}

export default App;
