import React from 'react'

function Shop(props) {
    return (
        <div className="content">
            <h4 className="header4">
                <span>{props.shops.header}</span>
            </h4>
            <p>Online shopping for retail sales direct to consumers</p>
        </div>
    )
}

export default Shop
