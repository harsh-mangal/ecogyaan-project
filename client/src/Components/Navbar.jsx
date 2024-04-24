import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Navbar-brand'>
        <i class="fa-solid fa-leaf"></i>
            <h1>Ecoyaan</h1>
           
        </div>
        <div className='Navbar-links'>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Sell on Ecoyaan</li>
                <li>Careers</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar