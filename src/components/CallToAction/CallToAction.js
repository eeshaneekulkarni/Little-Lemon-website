import styles from "./CallToAction.module.css";
import restaurant_food from "../../assets/restaurantfood.jpg";
import { useNavigate } from "react-router";
const CallToAction = ()=>{
    const navigate=useNavigate()
    return (
        <div className={styles.ctaContainer}>
            <div className={styles.ctaText}>
        <h1 className={styles.h1}>Little Lemon</h1>
        <h2 className={styles.h2}>Chicago</h2>
        <p className={styles.adTxt}>
          We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button className={styles.button} onClick={()=>navigate("/booking")}>Reserve a table</button>
        </div>
        <div className={styles.ctaImage}>
      
        <img src={restaurant_food} className={styles.img}alt="Restaurant Food" />
        </div>
       
        </div>
    )
}
export default CallToAction;