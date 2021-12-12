import React, { useState } from 'react'
import Numbers from './Numbers'

function Customer() {
    const [numbers] = useState([
        {name: "P R O D U C T",
         count: "100000+"
        },
        {name: "L I K E S",
         count: "45600"
        },
        {name: "S A L E S",
         count: "576864"
        },
        {name: "C U S T O M E R S",
         count: "94744"
        }
    ])

    return (
        <div className='customer'>
                <h1>1000+ Customer</h1>
                <p>Analyze any Business or Creator account-including your competitors-to find the imagery, </p>
                <p>visuals, and captions that drive audience engagement. Get social calendars planned faster </p> 
                <p>and spend less time testing content strategies.</p>
                {numbers.map((number) => (
                    // <Numbers  name={number.name}  /> 
                    <Numbers key={number.name} {...number} />          
                ))}
                
        </div>
    )
}

export default Customer

