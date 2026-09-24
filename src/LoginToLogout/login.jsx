import React from 'react'

const login = () => {
  return (
    <div>
        <form >
            <label htmlFor="">Username:</label>
            <input type="text"
            placeholder='Enter your Username' />
            <br />
            <label htmlFor="">Password</label>
            <input type="text"
            placeholder='Enter your password' />
        </form>
    </div>
  )
}

export default login