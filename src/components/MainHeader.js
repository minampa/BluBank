import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLightbulb, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Header from './Header'

function MainHeader() {
    return (
        <div className='main-header'>
            <Header />
            <img src='../../images/lock.svg' className='lock' /> 
        </div>
    )
}

export default MainHeader
