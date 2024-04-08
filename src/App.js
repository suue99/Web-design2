
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Search from "./components/Search";


function App() {
  
  return (
    <div>
    <BrowserRouter> 
    <Navbar />

    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/About" element = {<About />} />
      <Route path = "/Products" element = {<Products />} />
      <Route path = "/Login" element = {<Login />} />
      <Route path = "/Search" element = {<Search />} />
    </Routes>
    </BrowserRouter>
   
    </div>
  
  );
}

export default App;
