import React from 'react';
import Common from './Common';
import about from './images/abt.png'

const About = () => {
    return (
        <>
        <Common
        name="Welcome to About Page"
        btn="Contact now"
        topage = '/contact'
        imgsrc={about} />
        
        </>
    

 
 )
}

export default About;