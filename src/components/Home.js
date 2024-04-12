import Homesearch from "./Homesearch";

function Home() {
    return (
      <div className="toppage-container">
      <h1 className="main-heading">Find The Right Physiotherapist Near You!</h1>

      <Homesearch/>

      <p className="home-subtitle">Connecting you with top-rated physios in your area.</p>

      </div>
    
    );
  }

  export default Home