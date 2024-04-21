import Homesearch from "./Homesearch";
import Steps from "./Steps";
import '../Homepage/homepage.css'

function Home() {
    return (
      <div>
        <div className="toppage-container">
        <h1 className="main-heading">Find The Right Physiotherapist Near You!</h1>

        <Homesearch/>
        </div>

        <div>
        <p className="home-subtitle">Connecting you with top-rated physios in your area.</p>
        </div>

        <Steps />
       
      </div>
    
    );
  }

  export default Home