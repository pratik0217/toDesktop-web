import "./App.css";
import Navbar from "./component/navbar";
import navbarLogo from './assets/asset\ 0.png'
import developerToggle from './assets/asset\ 1.svg'
import { Routes, Route } from "react-router";
import Pricing from "./component/pricingPage";
import Login from "./component/loginPage";
import Blog from "./component/blogPage";
import Changelog from "./component/changelogPage";
import Docs from "./component/docsPage";
import MainSection from "./component/mainSection"; 

function App() {
  return (
    <>
      <header>
        <Routes>
          <Route path="/" element={<Navbar navbarLogo={navbarLogo} developerToggle={developerToggle}/>}>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </header>
      <main>
        <MainSection/>
      </main>
    </>
  );
}

export default App;
