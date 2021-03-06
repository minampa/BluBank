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
            <div className='shop'>
                <h3>
                    <div>
                        <div className='empty-space'></div>
                        <div className ='fire-container'>
                            Hot <img src="../../images/fire.svg" className='fire' /> 
                        </div>
                        
                        deals for you
                    </div>
                </h3>
                {/* <h3>deals for you</h3> */}
                <p className='paragaph'>Online shopping for retail sales direct to consumers</p>
                
            </div>

            
            {shops.map((shop) => (
                <Shop  header={shop.header}  />            
            ))}
        
        </div>
    )
}

export default ShopContainer
