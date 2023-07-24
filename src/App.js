import logo from "./logo.svg";
import "./App.css";
import AppNavbar from './components/Navbar'
import { Route, Routes } from "react-router";
import AppProducts from "./components/Product";
import AppCards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path="/product" element={<AppProducts/>}/>
        <Route path="/card" element={<AppCards/>}/>
      </Routes>
    </div>
  );
}

export default App;
