import React from 'react'

function Header() {
    return (
        <div className="nav-bar">
            <ul className="nav">
                <li className="nav-item">ABOUT</li>
                <li className="nav-item">HOW IT WORKS</li>
                <li className="nav-item">CONTENT</li>
                <li className='blu'>
                    <img src="../../images/logo.svg" className='blu' />    
                </li>
            </ul>
            
        </div>
    )
}

export default Header
