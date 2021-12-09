import React, { useState } from 'react'

function Content(props) {
    const [contents] = useState([
        {
            h1: "Banking more smart",
            h2:"",
            paragraph: "Meet the only spend management platform and corporate card."
        },
        {
            h1: "1000+ Customer",
            h2: "",
            paragraph:""
        },
        {
            h1:"",
            h2:"Handoff your work smarter now",
            paragraph: "create documentation for the collaborators (i.e. designers or devs) directly in your design file"
        }
    ])

    return (
        <div>
            <h1>
                <span>{contents[1].h1}</span>
            </h1>
            <h2>
                <span>{contents[1].h2}</span>
            </h2>
            <p>
                <span>{contents[1].paragraph}</span>
            </p>
        </div>
    )
}

export default Content
