import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import RotateCard from './RotateCard'

function SmartBank() {
    return (
        <div>
            <div className="content">
                <h1>
                    Banking more smart
                </h1>
                <p>Meet the only spend management</p>
                <p>platform and corporate card</p>
                <div className="arrow-cadr">
                    <FontAwesomeIcon icon={faLongArrowAltRight} className="arrow" />
                </div>
                <h4>Get your card</h4>
            </div>
           


            <RotateCard />
        </div>
    )
}

export default SmartBank
