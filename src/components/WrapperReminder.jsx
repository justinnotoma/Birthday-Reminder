import React, { useEffect, useState } from 'react'

export const WrapperReminder = ({hideWrapper, clearAll, listOfUsers}) => {

    // This function will check if it is the user birthday
    const isBirthday = (date) => {
        // Get current date
        const currentDate = new Date
        const dateParts = date.split('-')
        
        // Get current month
        const currentMonth = ()  => {
            let currentMonth = currentDate.getMonth()
            currentMonth = currentMonth + 1
            
            if(currentMonth < 10) currentMonth = `0${currentMonth}`
            return currentMonth
        }
        
        // Get current date
        const currentDay = () => {
            let currentDay = currentDate.getDate()
            
            if(currentDay < 10 && !currentDay.toString().includes('0')) currentDay = `0${currentDay}`
            return currentDay
        }
        
        const isBirthday = `${dateParts[1]}-${dateParts[2]}` === `${currentMonth()}-${currentDay()}`
        console.log(`${currentMonth()}-${currentDate.getDate()}`)
        
        return isBirthday
    }
    
    return (
        <div className='wrapper-reminder'>
            <header>
                <h1 className='font-500'>Birthday Reminder</h1>
                <h2 className="font-400 sub-header">{`${new Date().getMonth() + 1}/${new Date().getDate()}`}</h2>
            </header>

            {
                listOfUsers.length === 0 ? (
                    <p className='font-500'>No Birthdays today</p>
                ):(
                    listOfUsers.map((user, index) => (
                        isBirthday(user.birthday) & user.age > 0 ? (
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

