import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Searchbar from './Searchbar';

function Results(props) {

    console.log(props.items)

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q');

    useEffect(() => {}, [searchQuery]);

    return (
        <div>
            <h1>Search Results for : {searchQuery}</h1>
            {}
            
            <Searchbar/>
        </div>
    );
}

export default Results;
