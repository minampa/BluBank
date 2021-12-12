import React from 'react'

function Handoff() {
    return (
        <div className='custom-handoff'>
            <div className='main-custom'> 
                <img src="../../images/card.svg"  className='custom-card'/>
            </div>
            <div className='handoff-container'>
                <div className=' handoff'>
                    <h1>Handoff your work smarter now</h1>
                    <p>Create documentation for the collaborators (i.e. designers or devs) directly in your design file.</p>
                </div>
                <div className="strategic">
                    <div className='group'>
                        <img src='../../images/Group1.svg' className='group-pic' />
                    </div>
                    <div>
                        <h4>Strategic</h4>
                        <p>Suggests that the component spacing between cards and elements.</p>
                    </div>
                </div>
                <div className="strategic">
                    <div className='group'>
                        <img src='../../images/Group2.svg' className='group-pic' />
                    </div>
                    <div>
                        <h4>Work schedule</h4>
                        <p>work schedule is the time an employee is expected to be on the job</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Handoff
