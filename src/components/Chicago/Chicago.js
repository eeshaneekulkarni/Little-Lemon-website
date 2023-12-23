import styles from "./Chicago.module.css";
import Mario_and_Adrian_A from "../../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../assets/Mario_and_Adrian_B.jpg";
const Chicago = ()=>{
    return (
        <div id="about" className={styles.container}>
         
           <div className={styles.leftColumn}>
           <h1>Little Lemon</h1>
           <h2>Chicago</h2>
           <p className={styles.text}> Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
           <p className={styles.text}>
          To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
        </div>
        <div className={styles.rightColumn}>
        <img src={Mario_and_Adrian_A} className={styles.img0} alt="Restaurant Photo"/>
        <img src={Mario_and_Adrian_B} className={styles.img} alt="Restaurant Photo Two"/>
        </div>

        </div>
    )
}
export default Chicago;