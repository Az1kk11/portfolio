import Image from 'next/image'
import React from 'react'
import logo from '../../../public/azik-2.png'
import './style.css'

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="logo-box">
                        <span>Jaksilikov</span>
                        <span>Azizbek</span>
                        <Image src={logo} alt='' className='logo-img' />
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header