import React, { useState } from 'react'
import Shop from './Shop'

function ShopContainer(props) {
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
        
        <div className='shop-container'>
            <div>
                <h3>
                    Hot <img src="../../images/fire.svg" /> 
                </h3>
                <h3>deals for you</h3>
                <p className='paragaph'>Online shopping for retail sales direct to consumers</p>
                
            </div>

            
            {shops.map((shop) => (
                <Shop  header={shop.header}  />            
            ))}
        
        </div>
    )
}

export default ShopContainer
