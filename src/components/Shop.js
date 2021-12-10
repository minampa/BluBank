import React from 'react'

function Shop(props) {
  
    return (
        <div className="shop">
            <img src="../../images/ax.svg" />
            <h4 className="header4">
                <span>{props.header}</span>
            </h4>
            <p>Online shopping for retail sales direct to consumers</p>
        </div>
    )
}

export default Shop
