import React from 'react'
import './Hero.css'
import rainforestburning from './images/rainforestburning.mp4'

const Hero = () => {
    return (
        <div className='hero'>
            <video className='background-video' autoPlay loop muted>
                <source src={rainforestburning} type='video/mp4' />
            </video>
            <div className='content'>
                <p>Save Amazon Rainforest</p>
                <p>Invest little Now so as not to pay much Tomorrow</p>
                <button href='/' className='button'>Make the difference</button>
            </div>
                <button href='/' className='button'>Make the difference</button>
        </div>
    )
}

export default Hero
