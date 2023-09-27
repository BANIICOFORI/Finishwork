import React, { useState } from 'react'
import styles from "./Header.module.scss"
import { Link, NavLink } from 'react-router-dom';
import {RxLockClosed} from "react-icons/rx";
import {HiOutlineMenuAlt3} from "react-icons/hi"
import {FaTimes} from "react-icons/fa"



export const logo = (
    
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Paym<span>Trak</span>
      </h2>
    </Link>
  </div>
);

const activeLink = ({isActive}) =>(isActive ?`${styles.active}` : "")
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };
    const hideMenu = () => {
        setShowMenu(false)
    };
   const logout = (
        <span className={styles.logout}>
          <Link to="/Logout">
            <RxLockClosed size={20}/>
          </Link>
        </span>
      );
  return (
    <header>
      <div className={styles.header}>{logo}
        <nav className={showMenu ? `${styles["show-nav"]} ` :
        `${styles["hide-nav"]}`
        }> 
            <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`:
            `${styles["nav-wrapper"]}`} onClick={hideMenu}>
            </div> 
                             
            <ul>
                <li className={styles["logo-mobile"]}>
                    {logo}
                    <FaTimes size={22} color="fff" onClick={hideMenu} />
                    
                </li>
                <li>
                    <NavLink to="/home" className={activeLink}>
                    Dashboard
                    </NavLink>
                </li>
            </ul>
            <div className={styles["header-right"]}>
                <span className={styles.links}>
                    <NavLink to={"/customersList"}
                    className={activeLink}>
                    Customers
                    </NavLink>
                    <NavLink to={"/Items"} 
                    className={activeLink}>
                        Items
                    </NavLink>
                    <NavLink to={"/Estemates"} 
                    className={activeLink}>
                      Estemates
                    </NavLink>
                    <NavLink to={"/Invoices"} 
                    className={activeLink}>
                      Invoices
                    </NavLink>
                    <NavLink to={"/payment"} 
                    className={activeLink}>
                     Payment
                    </NavLink>
                    
                    <NavLink to={"/"}
                    className={activeLink}>
                    Login
                    </NavLink>
                    <NavLink to={"/Register"}
                    className={activeLink}>
                    Register
                    </NavLink>
                    <NavLink to={"/"} 
                    className={activeLink}>
                     {logout} Logout
                    </NavLink>
                </span>
               
                    {/* <NavLink to="/home" className={activeLink}>
                    Home
                    </NavLink> */}
            
            </div>
        </nav>
        <div className={styles["menu-icon"]}>
              <HiOutlineMenuAlt3 size={20} onClick={toggleMenu} />   
        </div>
      </div>
    </header>
  );
};

export default Header;