import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'

const ContactCard = (props) => {

    const { id, name, email } = props.contact

    return (
        <div className="item" style={{ position: "relative", padding: "10px 10px" }}>
            <img src={user} alt="user" className="ui avatar image" />
            <div className="content">
                <Link to={`/contact/${id}`} state={{contact: props.contact}}>
                    <div className="header">{name}</div>
                    <div>{email}</div></Link>
            </div>
            <i className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px", cursor: "pointer", position: "absolute", right: "0", top: "10px" }}
                onClick={() => props.clickHandler(id)}></i>
        </div>
    )
}

export default ContactCard