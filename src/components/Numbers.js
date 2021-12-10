import React from 'react'

function Numbers(props) {
    
    return (
        <div className='name'>
            <h5 className='info-name'>
                <spna>{props.name}</spna>
            </h5>
            <h4 className='numbers'>
                <span>{props.count}</span>
            </h4>
        </div>
    )
}

export default Numbers
