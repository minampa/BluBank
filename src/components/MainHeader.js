import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Header from './Header'

function MainHeader() {
    return (
        <div className='main-header'>
            <Header />
            <FontAwesomeIcon icon={faShoppingBag} className='shopping-bag'/>
        </div>
    )
}

export default MainHeader
