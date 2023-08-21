import {useParams} from "react-router-dom";

const ContactDetails = () => {
    const params = useParams();

    const contacts = [{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
    }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
    }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666"
    }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
    }];

    const contact = contacts.filter(contact => contact.firstName === params.contactName)[0];

    return <div className="container">
        <h1>Contact details</h1>
        <div className='contactCard'>
            <div><span className='label'>Full name:</span> {contact.firstName} {contact.lastName} </div>
            <div><span className='label'>Phone:</span> {contact.phone}</div>
            <div><span className='label'>Gender:</span> {contact.gender}</div>
            <div><span className='label'>Description:</span> </div>
            <div><span className='label'>Chatting:</span> </div>
        </div>
    </div>
}

export default ContactDetails;