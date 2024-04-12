
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Search from "./components/Search";
import Homesearch from "./components/Homesearch";
import Results from "./components/Results";


function App() {
  
  return (
    <div>
    <BrowserRouter> 
    <Navbar />

    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/About" element = {<About />} />
      <Route path = "/Signup" element = {<Signup />} />
      <Route path = "/Login" element = {<Login />} />
      <Route path = "/Search" element = {<Search />} />
      <Route path="/" element={<Homesearch />} />
      <Route path="/results" element={<Results />} />
    </Routes>
    </BrowserRouter>
   
    </div>
  
  );
}

export default App;
