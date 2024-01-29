import React from 'react'
import style from'./Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${style.bg_thunder}  fixed`}>
        <div className="container-fluid">
          <button className="navbar-toggler m-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-beat  fa-solid fa-bolt main_color fa-xl pt-3  "></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mt-2 mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className={`  ${style.main_link} nav-link mt-2 active `} aria-current="page" to='/home'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={` nav-link mt-2 ${style.link_color}`} to='/about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className={` nav-link mt-2 ${style.link_color}`} to='/services'>Services</Link>
              </li>
              <li className="nav-item mx-4">
                <Link className={`navbar-link ${style.small_logo}` }to="/home"><i className={` fa-beat  fa-solid fa-bolt fa-3x ${style.logo}`}></i></Link>
              </li>
              <li className="nav-item">
                <Link className={` nav-link mt-2 ${style.link_color}`} to='/projects'>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className={` nav-link mt-2 ${style.link_color}`} to='/clients'>Clients</Link>
              </li>

              <li className="nav-item">
                <Link className={` nav-link mt-2 ${style.link_color}`} to='/contact'>Contact</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )

}
