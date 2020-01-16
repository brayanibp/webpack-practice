import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

console.log(data);
function App() {
    const [loaderList, setLoaderList] = useState([]);
    function handleClick(){
        setLoaderList(data.loaders);
    }
    return (
        <div>
            <p>Que bonito es lo bonito hecho en react</p>
            <div>
                <video src={video} with={360} controls poster={logo}></video>
            </div>
            <div>
                <img src={logo} alt="" width={40} />
            </div>
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