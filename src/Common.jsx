import React from 'react';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return (
        <>
        <section id="header" className="d-flex align-items-center home-main-div">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto ">
                    
                    <div className="row">
                    
                    <div className="col-md-6 pt-5 order-2 order-lg-0  kk">
                    <h1>{props.name} <br/>
                     <strong className="brand-name"> Developer Adda </strong></h1>
                    <h2 className="small-note">We are a group of talented developers making websites</h2>
                    <div className = "mt-3">
                        <NavLink to={props.topage} className="btn btn-outline-primary ">{props.btn} </NavLink>
                    </div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img "> 
                    <img src={props.imgsrc} alt="home-img" className="img-fluid animated common_img" />
                    </div>

                    </div>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Common;
