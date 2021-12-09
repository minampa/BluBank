import React, { useState } from 'react'

function Shop(props) {
    const [shops] = useState([
        {
            header: "1.5% cashback"
        },
        {
            header: "30-day terms"
        },
        {
            header: "Save Money"
        }
    ])
    return (
        <div className="shop">
            <h4 className="header4">
                <span>{props.header}</span>
            </h4>
            <p>Online shopping for retail sales direct to consumers</p>
        </div>
    )
}

export default Shop
