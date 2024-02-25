import React, { useState } from 'react'

export const WrapperAddUser = ({hideWrapper, addUser}) => {
    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        addUser(name, birthday)

        hideWrapper()
    }

  return (
    <div className='wrapper-add-user'>
        <h1 className='font-400'>Add birthday</h1>

        <form id='birthday-form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Type user name' className='text-box font-500' id="" onChange={(e) => setName(e.target.value)} />
            <input type="date" name="" className='text-box font-500' id="" onChange={(e) => setBirthday(e.target.value)}/>
            <button type="submit" className='clear-btn font-500'>Add birthday</button>
        </form>

        <button className='clear-btn font-500' onClick={() => hideWrapper()}>Close</button>
    </div>
  )
}
