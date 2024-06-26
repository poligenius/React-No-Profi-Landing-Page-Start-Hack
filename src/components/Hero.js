import React from 'react'
import './Hero.css'


const Hero = () => {
    return (
        <div className='hero'>
            <video className='background-video' autoPlay loop muted>
                <source src="https://main--put-off-fire.netlify.app/images/rainforestburning.mp4" type='video/mp4' />
            </video>
            <div className='content'>
                <p>Save Amazon Rainforest</p>
                <p>Invest little Now so as not to pay much Tomorrow</p>
                <a className='button' href='https://rainforestfoundation.org/engage/brazil-amazon-fires/?form=donate'>Make the difference</a>
            </div>
        </div>
    )
}

export default Hero
