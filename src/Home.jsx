import React from 'react';

import Common from './Common';
import web from './images/home.jpg'


const Home = () => {
    return (
        <>
        <Common
        name="Grow your business with"
        btn="get started"
        topage = '/service'
        imgsrc={web} />
        
        </>
 
 )
}

export default Home;