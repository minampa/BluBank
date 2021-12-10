import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Enter() {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">Signup</li>
                <li className="nav-item">Login</li>
                <li className="social-media">
                    <FontAwesomeIcon icon = {faFacebookF} />
                </li>
                <li className="social-media">
                    <FontAwesomeIcon icon = {faInstagram} /> 
                </li>
                <li className="social-media">
                    <FontAwesomeIcon icon = {faYoutube} /> 
                </li>
            </ul>
        </div>
    )
}

export default Enter
