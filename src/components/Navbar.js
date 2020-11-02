import React from "react"

import { navbar } from "../scss/Navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={navbar}>
      <h2>Gilmo</h2>
      <ul className="links">
        <li>One</li>
        <li>Two</li>
      </ul>
    </nav>
  )
}

export default Navbar
