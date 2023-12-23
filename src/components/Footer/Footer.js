import styles from "./Footer.module.css"
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import restaurant from "../../assets/restaurant.jpg";
const Footer = ()=>{
    return (
        <div className={styles.container}>
           <div className={styles.firstRow}>
            <div className={styles.imgColumn}>
            <img src={restaurant} className={styles.logo} alt="Restaurant Food" />
            </div>
            <div className={styles.firstColumn}>
           
            <ul className={styles.ul}>
              <li> <h2>Menu</h2></li>
               <li><NavLink to="/" className={styles.navlink}>Home</NavLink></li>
                <li><HashLink to="/#about"className={styles.hashlink}>About</HashLink></li>
                <li><HashLink to="/#menu" className={styles.hashlink}>Menu</HashLink></li>
                <li><NavLink to="/bookings" className={styles.navlink}>Booking</NavLink></li>
            </ul>
            </div>
            <div className={styles.secondColumn}>
           
          <ul className={styles.ul}>
            <li> <h2>Contact</h2></li>
            <li>
              <address className={styles.address}>
                <p>Little Lemon </p>
                <p>111 Chicago</p>
                <p>LaSalle Street Chicago</p>
                <p>Illinois 60602 </p>
                <p>USA</p>
              </address>
            </li>
            <li>
            <a href="tel:+111111111111" target="_blank" rel="external" className={styles.footerLink}>
                +11 11 11111111
              </a>
            </li>
            <li>
            <a
                href="mailto:contact@littlelemon.com"
                target="_blank"
                rel="external"
                className={styles.footerLink}
              >
                contact@littlelemon.com
              </a>
            </li>
          </ul>
            </div>
            <div className={styles.thirdColumn}>
            
          <ul className={styles.ul}>
            <li>
            <h2>Social Media</h2>
            </li>
            <li>
              <a
                href="https://www.facebook.com/littlelemon"
                target="_blank"
                rel="external"
                className={styles.footerLink}
              >
                Facebook
              </a>
            </li>
            <li>
               <a
                href="https://www.instagram.com/littlelemon"
                target="_blank"
                rel="external"
                className={styles.footerLink}
              >
                Instagram
              </a>
            </li>
            <li>
             <a
                href="https://twitter.com/littlelemon"
                target="_blank"
                rel="external"
                className={styles.footerLink}
              >
                Twitter
              </a>
            </li>
          </ul>
            </div>
           </div>
           <hr style={{width:"100%"}}/>
           <div className={styles.secondRow}>
           <span>Developed by Yurii.</span>
           <p>© 2023 Little Lemon. All rights reserved.</p>
           </div>
        </div>
    )
}
export default Footer;