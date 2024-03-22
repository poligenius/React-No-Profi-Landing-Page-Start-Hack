import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#land'>Land</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#donation'>Donation</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2024 START HACK, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
