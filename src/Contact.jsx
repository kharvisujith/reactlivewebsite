import React, { useState } from 'react';

const Contact = () => {


    const [data, setdata] = useState({fullname:'', phonenumber:'', email:'', message:''});

    const inputevent =(event) => {
        const {name, value} = event.target
        setdata({...data, [name]:value})
        console.log(data)

    }

    const formsubmit = (e) => {

        e.preventDefault()
        alert(`My name is ${data.fullname}, Phone number is ${data.phonenumber}, my email id is ${data.email}`)
        setdata({fullname:'', phonenumber:'', email:'', message:''})        

    }

    return (
        <>

        <div className="container-fluid">
            <div className="row">
            <div className="col-10 mx-auto ">

            <div className="text-center">
            <h1>Contact Us</h1>
            </div>

            <div className="row">
            <div className="col-md-6 col-10 mx-auto my-5">

        <form onSubmit={formsubmit}>
        <div className="mb-3">
        <label for="fullname" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="fullname"  value={data.fullname} name="fullname" placeholder="Enter your name"  onChange={inputevent} required/>
        </div>
        <div className="mb-3">
        <label for="phonenumber" className="form-label">Phone Number</label>
        <input type="number" className="form-control" id="phonenumber"value={data.phonenumber} name="phonenumber" placeholder="Enter your phone number"  onChange={inputevent} required  />
        </div>

        <div className="mb-3">
        <label for="email" className="form-label">Email ID</label>
        <input type="email" className="form-control" id="email"  value={data.email}name="email" placeholder="Enter your Email ID" onChange={inputevent} required/>
        </div>
        <div className="mb-3">
        <label for="message" className="form-label">Message</label>
        <textarea className="form-control" id="message"  value={data.message} name="message" rows="3" onChange={inputevent} required></textarea>
        </div>
        <div class="col-12">
        <button class="btn btn-outline-primary" type="submit">Submit form</button>
        </div>

        </form>

            

            </div>

            </div>

            

            </div>

            </div>
        </div>
     
        </>
 
 )
}

export default Contact;