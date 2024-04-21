
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./components/Homepage/Home";
import About from "./components/About-page/About";
import SignupForm from "./components/Signup-page/SignupForm";
import Navbar from "./components/Homepage/Navbar";
import Login from "./components/Signup-page/Login";
import Contact from "./components/Contact-page/Contact";
import Homesearch from "./components/Homepage/Homesearch";
import Results from "./components/Search-results/Results";
import Footer from "./components/Homepage/Footer";




function App() {
  
  return (
    <div>
    <BrowserRouter> 
    <Navbar />
   
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/About" element = {<About />} />
      <Route path = "/Signup" element = {<SignupForm />} />
      <Route path = "/Login" element = {<Login />} />
      <Route path = "/Contact" element = {<Contact />} />
      <Route path="/" element={<Homesearch />} />
      <Route path="/results" element={<Results />} />

    </Routes>
    
    </BrowserRouter>

   

    <Footer/>
   

    </div>
  
  )
};

export default App;
