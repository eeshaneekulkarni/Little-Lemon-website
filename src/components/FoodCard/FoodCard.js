import { symbol } from "prop-types";
import styles from "./FoodCard.module.css";
const FoodCard = (props)=>{
    return (
        <div className={styles.container}>
         
            <img src={props.image} className={styles.foodImg} alt="Food"/>
            <div className={styles.block}>
            <div className={styles.firstRow}>
            <div className={styles.name}>
                <p >{props.name}</p>
            </div>
            <div className={styles.price}>
                <p>{props.price}$</p>
            </div>
            </div>
            <div className={styles.description}>
                <p className={styles.text}>{props.description}</p>
            </div>
            <div className={styles.order}>
            <a href="#">Order delivery</a>
            </div>
            </div>
        </div>
    )
}
export default FoodCard;