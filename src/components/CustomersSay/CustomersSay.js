import styles from "./CustomersSay.module.css";
import CustomerCard from "../CustomerCard/CustomerCard";
const reviews=[
    {
        name:"User1",
        review:"I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!",
        rating:3
    },
    {
        name:"User2",
        review:"I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!",  
        rating:5
    },
    {
        name:"User3",
        review:"I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. Not to mention the presentation, which was beautiful. It was an amazing dining experience!",
        rating:4

    }
]
const CustomersSay = ()=>{
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>What ours customers say!</h1>
            <div className={styles.cards}>
            {
            reviews.map((val)=>{
                return <CustomerCard name={val.name} review={val.review} rating={val.rating}/>
            })}
            </div>
        </div>
    )
}
export default CustomersSay;