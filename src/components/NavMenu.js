//import { useState } from "react";

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
                <li>HOME</li>
                <li>PROJECT</li>
                <li>SERVICES</li>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li>SHOP</li>
                <li>CONTACT</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    )
}