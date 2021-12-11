import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'

function SmartBank() {
    return (
        <div className='main-smart'>
            <div className="content smart-bank">
                <h1>
                    Banking more smart
                </h1>
                <p>Meet the only spend management platform and corporate card</p>
                
                <div className="arrow-cadr">
                    <FontAwesomeIcon icon={faLongArrowAltRight} className="arrow" />
                </div>
                <h4 className='get-card'>Get your card</h4>
            </div>
           
            <div>
                <div className='card'>
                    <div className="left-card">
                    
                    </div>
                    <div className="right-card">
                        <img src='../../images/icons.svg' className='icons'></img>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default SmartBank
