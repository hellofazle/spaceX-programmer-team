import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import './Programmer.css'

const Programmer = (props) => {
    
    //using destructuring 
    const { img, name, Age, salary, company, job } = props.programmer;
    //using fontAwesome for icon
    const sendInvite= <FontAwesomeIcon icon={faPaperPlane} />

    return (
        <div>
            {/* programmer card data */}
            <div className="card col-lg-4 border-0 fw-bolder">
                <img src={img} className="card-img-top mx-auto py-3"  alt="" />
                <div className ="card-body text-start">
                <h5 className ="card-title fw-bold">Name: {name}</h5>
                <p className ="card-text">Job: {job}</p>
                <p className ="card-text">Company: {company}</p>
                <p className ="card-text">Age: {Age}</p>
                <p className ="card-text">Salary: ${salary}</p>
                </div>
                <button onClick={()=>props.handleRecruitCart(props.programmer)} 
                className='invite-btn text-center fw-bold'>Send Invite {sendInvite}</button>
            </div>
        </div>
    );
};

export default Programmer;