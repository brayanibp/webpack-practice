import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader';

console.log(data);
function App() {
    const [loaderList, setLoaderList] = useState([]);
    function handleClick(){
        setLoaderList(data.loaders);
    }
    return (
        <div>
            <p>Que bonito es lo bonito hecho en react</p>
            <ul>
                {
                    loaderList.map(item => <Loader {...item} key={item.id}/>)
                }
            </ul>
            <button onClick={handleClick}>Mostrar todo lo aprendido hasta el momento</button>
        </div>
    );
}

export default App;