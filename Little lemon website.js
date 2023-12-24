import React from 'react';

const Footer =() => {
    return(
        <footer>
            <section>
                <div className ='company-info'>
                    <img src ={logo} alt=''/>
                    <p>We are a family owned mediterranean restaurant, focused on traditional recipes served with
                         a modern twist</p>
                         <div>
                            <h3>Important Links</h3>
                            <ul>
                                <li><a href ='/'>Home</a></li>
                                <li><a href ='/'>About</a></li>
                                <li><a href ='/'>Menu</a></li>
                                <li><a href ='/'>Reservations</a></li>
                                <li><a href ='/'>Reservations</a></li>
                                <li><a href ='/'>Login</a></li>
                            </ul>
                         </div>

                         <div>
                            <h3>Contact</h3>
                            <li>Address:<br/> 123 Towncity, USA</li>
                            <li>Phone:<br/>++ 0123 456 789</li>
                            <li>Email:<br/>littlelemon.com</li>
                         </div>

                </div>
            </section>
        </footer>
    );
};

export default Footer;