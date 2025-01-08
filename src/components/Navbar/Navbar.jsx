import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../assets/narutopage.png'
import irina from '../../assets/irina.png'
import caret from '../../assets/caret.png'

const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="navbar-left">
            <div className="home-page">
                <img src={logo} alt="" className="logo" />
                <p>NRPG</p>
            </div>
            <ul>
                <li className='nav-dropdown'>
                        <p>ИГРА</p>
                        <img src={caret} alt="" className='caret'/>
                    <div className="nav-dropdown-patches">
                        <p>ИЗМЕНЕНИЯ БАЛАНСА</p>
                        <p>ПРЕДЫДУЩИЕ ОБНОВЛЕНИЯ</p>
                    </div>
                </li>
                <li>ГЕРОИ</li>
                <li>ПРЕДМЕТЫ</li>
                <li>НОВОСТИ</li>
            </ul>
        </div>
        <div className="navbar-right">
            <div className="play-free">
            <img src={irina} alt="" className='irina'/>
            <p>ИГРАТЬ БЕСПЛАТНО</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar