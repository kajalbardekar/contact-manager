import React from 'react';
import user1 from "../images/user1.png";
import {Link} from 'react-router-dom';

const ContactDetails = (props) => {
//const {name,email} = props.contact;
    return (
        <div className="main">
            <div className='ui card centered'>
                <h1></h1>
              <h1>Hellow,this is me..!!!</h1>
                <div className='image'>
                    <img src={user1} alt="user1" />
                </div>
                <div className='contennt'>
                    <div className="header">
                            kajal
                        </div>
                    <div className='discription'>
                        kajal@gmail.com
                    </div>

                </div>

            </div>
            <div className='center-div'>
                <Link to="/">
                <button className='ui button blue center'>Back to contact list</button>
                </Link>
                
            </div>

        </div>
        

    )
}

export default ContactDetails;
