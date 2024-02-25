import React, { useState } from 'react'

export const WrapperReminder = ({hideWrapper, clearAll, listOfUsers}) => {
    const [birthdayCount, setBirthdayCount] = useState(0)
    
    return (
        <div className='wrapper-reminder'>
            <h1 className='font-400'>{birthdayCount} birthday today</h1>

            {
                listOfUsers.length === 0 ? (
                    <p className='font-500'>No Birthdays today</p>
                ):(
                    listOfUsers.map((user, index) => (
                        user.isBirthday ? (
                            <div className="user-card" key={index}>
                                <div className="user-profile font-500">{user.profile}</div>

                                <div className="user-info">
                                    <strong className="header font-700">{user.name}</strong>
                                    <p className="sub-header font-400">{user.age} years</p>
                                </div>
                            </div>
                        ): user.isBirthday
                    ))
                )
            }

                
            
            <button className="clear-btn font-500" onClick={() => hideWrapper()}>Add Birthday</button>
            <button className="clear-btn font-500" onClick={() => clearAll()}>Clear All</button>

        </div>
    )
}

