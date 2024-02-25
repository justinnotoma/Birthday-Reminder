import React, { useState } from 'react'

export const WrapperAddUser = ({hideWrapper}) => {
  return (
    <div className='wrapper-add-user'>
        <h1 className='font-400'>Add birthday</h1>

        <form>
            <input type="text" placeholder='Type user name' className='text-box font-500' id="" />
            <input type="date" name="" className='text-box font-500' id="" />
            <button type="submit" className='clear-btn'>Add birthday</button>
        </form>

        <button className='clear-btn' onClick={() => hideWrapper()}>Close</button>
    </div>
  )
}
