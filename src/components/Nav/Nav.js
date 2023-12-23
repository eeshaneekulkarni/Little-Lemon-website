import styles from "./Nav.module.css";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Nav = ()=>{
    return (
        <nav className={styles.nav}>
            <div className={styles.navColumn}>
            <img className={styles.navImg} src={logo} alt="Little Lemon Logo"/>
            </div>
            <div className={styles.navColumm}>
            <ul className={styles.ul}>
               <li><NavLink to="/" className={styles.navlink}>Home</NavLink></li>
                <li><HashLink to="/#about"className={styles.hashlink}>About</HashLink></li>
                <li><HashLink to="/#menu" className={styles.hashlink}>Menu</HashLink></li>
                <li><NavLink to="/booking" className={styles.navlink}>Reservations</NavLink></li>
                <li><HashLink to="/#" className={styles.hashlink}>Order Online</HashLink></li>
                <li><HashLink to="/#" className={styles.hashlink}>Login</HashLink></li>
            </ul>
            </div>
            
        </nav>
    )
}
export default Nav;