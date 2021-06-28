import React from 'react';
import Card from './Card.jsx'
import Cardinfo from './Cardinfo';

const Service = () => {
    return (

        <>
        <div className="text-center my-4"> 
        <h1 >Our Service</h1> 
        </div> 
        <div className="container-fluid ">
        <div cla>
            <div className="row ">
                <div className="col-10 mx-auto"> 
            <div  className="mb-5">

            <div  className="row gy-5 ">
            {

            Cardinfo.map((data, index) => {

                return(

                <Card 
                 key={index}
                 name= {data.title}
                 img={data.imgsrc}
                />
                )


            })

            }
           
            </div>
            </div>

             
               
                </div>
            </div>
            </div>
        </div>
      
        </>
 
 )
}

export default Service;