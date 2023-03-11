//import { useState } from "react";
import { HashLink } from "react-router-hash-link"

export function NavMenu() {
    // const [fix, setFix] = useState(false);
    // function setFixedSidebar() {
    //   if(window.scrollY >= 100) {
    //     setFix(true);
    //   } else {
    //     setFix(false);
    //   }
    // }
    // window.addEventListener("scroll", setFixedSidebar);
    return (
        <nav className="navmenu">
            <div className="navmenu__logo">
                <img src="../img/logo.svg" alt="logo" />
            </div>
            <ul className="navmenu__list">
                <li><HashLink to="/#home">HOME</HashLink></li>
                <li><HashLink to="/#project">PROJECT</HashLink></li>
                <li><HashLink to="/#services">SERVICES</HashLink></li>
                <li><HashLink to="/#about">ABOUT</HashLink></li>
                <li><HashLink to="/#blog">BLOG</HashLink></li>
                <li><HashLink to="/#shop">SHOP</HashLink></li>
                <li><HashLink to="/#contact">CONTACT</HashLink></li>
                <li><HashLink to="/#sign">Sign Up</HashLink></li>
            </ul>
        </nav>
    )
}