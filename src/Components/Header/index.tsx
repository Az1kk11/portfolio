'use client'

import Image from 'next/image'
import React, { MutableRefObject, useRef, useState } from 'react'
import logo from '../../../public/azik-2.png'
import './style.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const menuRef = useRef<any>(null)
    const router = usePathname();

    const menuToggle = () => menuRef.current.classList.toggle('active_menu')

    return (
        <header>
            <div className="container">
                <div className="navbar" ref={menuRef}>
                    <div className="logo-box">
                        <span>Jaksilikov</span>
                        <span>Azizbek</span>
                        <Image src={logo} alt='' className='logo-img' />
                    </div>
                    <ul>
                        <li  className={router == '/' ? 'active' : ''}>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className={router == '/about' ? 'active' : ''}>
                            <Link href={'/about'}>About</Link>
                        </li>
                        <li className={router == '/portfolio' ? 'active' : ''}>
                            <Link href={'/portfolio'}>Portfolio</Link>
                        </li>
                        <li className={router == '/contact' ? 'active' : ''}>
                            <Link href={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                    <button className='mobile-bar' onClick={menuToggle}>
                        <i className='ri-indent-decrease'></i>
                        <i className="ri-indent-increase"></i>
                    </button>

                </div>
            </div>
        </header>
    )
}

export default Header