import React from 'react'
import Shop from './Shop'

function ShopContainer(props) {
    return (
        <div>
            <div>
                <h2>
                    Hot <img src="../../images/fire.svg" /> 
                </h2>
                <h2>deals for you</h2>
                <p>Online shopping for retail sales direct to consumers</p>
            </div>

            
            {/* {props.shops.map(shops => (
                <Shop shops={shops} />
            ))} */}
        
        </div>
    )
}

export default ShopContainer
