import './Contact.css';

import {Link} from "react-router-dom";

import female from '../../assets/icons/person-dress-solid.svg';
import male from '../../assets/icons/person-solid.svg';

export const Contact = ({contact}) => {
    const gender = contact.gender === 'female' ? female : contact.gender === 'male' ? male : '';

    return (
        <div className='contactCard'>
            <div><span className='label'>Full name:</span> <Link to={contact.firstName}>{contact.firstName} {contact.lastName}</Link></div>
            <div><span className='label'>Phone:</span> {contact.phone}</div>
            <div><span className='label'>Gender:</span>  {gender ? <img className="img" src={gender} alt="gender"/> : null}</div>
        </div>
    )
}
