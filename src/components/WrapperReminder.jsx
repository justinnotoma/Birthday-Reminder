import React, { useState } from 'react'

export const WrapperReminder = ({hideWrapper}) => {
    const [birthdayCount, setBirthdayCount] = useState(0)
    return (
        <div className='wrapper-reminder'>
            <h1 className='font-400'>{birthdayCount} birthday today</h1>

            <div className="user-card">
                <div className="user-profile font-500">T</div>

                <div className="user-info">
                    <strong className="header font-700">Test Name</strong>    
                    <p className="sub-header font-400">29 years</p>
                </div>
            </div>
            
            <button className="clear-btn font-500" onClick={() => hideWrapper()}>Add Birthday</button>
            <button className="clear-btn font-500">Clear All</button>

        </div>
    )
}

