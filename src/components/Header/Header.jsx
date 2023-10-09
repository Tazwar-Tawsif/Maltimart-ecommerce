import React, {useRef, useEffect} from 'react'

import { NavLink } from 'react-router-dom'
import './header.css'

import { motion } from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { Container, Row } from 'reactstrap'

const nav_links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
]


const Header = () => {

    const headerRef = useRef(null);
    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add('sticky-header');
            } else {
                headerRef.current.classList.remove('sticky-header')
            }
        })
    }

    useEffect(()=>{
        stickyHeaderFunc();

        return ()=> window.removeEventListener('scroll', stickyHeaderFunc)
    })
    return (<header className='header' ref={headerRef}>
        <Container>
            <Row>
                <div className='nav-wrapper'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />
                        <div>
                            <h1>Generic E-commerce</h1>
                        </div>
                    </div>

                    <div className='navigation'>
                        <ul className='menu'>
                            {
                                nav_links.map((items, index) => (
                                    <li className='nav-item' key={index}>
                                        <NavLink to={items.path} className={(navClass) => navClass.isActive ? 'nav-active' : ''}>{items.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='nav-icons'>
                        <span className='fav-icon'>
                            <i class="ri-heart-line"></i>
                            <span className='badge'>2</span>
                        </span>
                        <span className='cart-icon'>
                            <i class="ri-shopping-bag-line"></i>
                            <span className='badge'>2</span>
                        </span>
                        <span><motion.img whileTap={{ scale: 1.4 }} src={userIcon} alt='' /></span>
                    </div>

                    <div className='mobile-menu'>
                        <span><i class="ri-menu-line"></i></span>
                    </div>

                </div>
            </Row>
        </Container>
    </header>
    )
}

export default Header