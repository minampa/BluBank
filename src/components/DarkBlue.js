import React from 'react'
import CircleText from './CircleText'
import Card from './Card'

function DarkBlue() {
    return (
        <div className='dark-blue'>
            <div className='updated-news'>
                <h4>Subscribe to get updated news</h4>
                <CircleText />
            </div>
            <div className='line'></div>
            <div className='content handoff'>
                <h1>Subscribe Our Newsletter</h1>
                <button className='btn'>Subscribe</button>
            </div>
            <Card />
        </div>
    )
}

export default DarkBlue
