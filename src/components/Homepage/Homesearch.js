import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import '/Users/suue/Desktop/web-design2/src/components/Homepage/homepage.css'


function Homesearch() {

    const [searchValue, setSearchValue] = useState ('');
    const navigate = useNavigate();

    const handleInputValue = (event) => {
        setSearchValue(event.target.value);

    }

    const handleClick = () => {
        if(searchValue){
            navigate ( `/results?q=${searchValue}`) }
        else
            {console.log('search field is empty');
        }
    };

    return (
    <div className="search-container">
    
        <input type="text" placeholder="Enter your location here..." 
        className="search-input" value={searchValue} onChange={handleInputValue}  
        />

        <button onClick={handleClick}> <FaSearch /> </button>

    </div>
    );
  }

  export default Homesearch