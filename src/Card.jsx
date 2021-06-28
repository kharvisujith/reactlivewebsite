import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-md-0 mx-auto"> 
                <div className="card">
                <img src={props.img} className="card-img-top card-image" alt="card-image" />
                <div className="card-body card_body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="/contact" className="btn btn-primary"><span className="card-btn">Contact Us </span></NavLink>
                </div>
                </div>
            </div>


        </>
    )
}

export default Card;
