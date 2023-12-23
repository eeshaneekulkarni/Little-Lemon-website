import styles from "./Confirmation.module.css"
import Nav from "../../components/Nav/Nav";
import ConfirmationPanel from "../../components/ConfirmationPanel/ConfirmationPanel";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
const Confirmation = ()=>{
    const [booking,setBooking]=useState({date:"",time:"",guests:"",reason:""})
    useEffect(() => {
        const booking = localStorage.getItem("Bookings");
        if (booking) {
          setBooking(JSON.parse(booking));
        };
      }, []);
    
    
    return (
        <div>
           <Nav/>
           <div className={styles.container}>
            <h1 className={styles.h1}>
                Thank you, your table reserved!
            </h1>
           <ConfirmationPanel date={booking.date} time={booking.time} guests={booking.guests} reason={booking.reason}/>
           </div>
           <Footer/>
        </div>
    )
}
export default Confirmation;