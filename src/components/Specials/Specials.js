import styles from "./Specials.module.css";
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";
import FoodCard from "../FoodCard/FoodCard";
import { useNavigate } from "react-router";


const menu=[
    {
        id:1,
        image:greekSalad,
        name:"Greek Salad",
        price:14.14,
        description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        id:2,
        image:bruchetta,
        name:"Bruchetta",
        price:12.12,
        description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        id:3,
        image:lemonDessert,
        name:"Lemon Dessert",
        price:8.15,
        description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    },




]
const Specials = ()=>{
    const navigate=useNavigate();
    return (
        <div id="menu"className={styles.container}>
            <div className={styles.row}>
            <h1 className={styles.h1}>This Week Specials</h1>
            <button className={styles.button} onClick={()=>navigate("/")}>Online menu</button>
            </div>
        
        <div className={styles.cards}>
        
            {
                menu.map((val)=>{
                    return <FoodCard image={val.image} name={val.name} price={val.price} description={val.description}/>
                })
            }
        </div>
        </div>
    )
}
export default Specials;