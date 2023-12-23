import styles from "./CustomerCard.module.css";
const CustomerCard = (props)=>{
    const stars = {
        1: "★☆☆☆☆",
        2: "★★☆☆☆",
        3: "★★★☆☆",
        4: "★★★★☆",
        5: "★★★★★",
      };
    return (
        <div className={styles.container}>
            <div className={styles.rating}>
                <p>{stars[props.rating]}</p>
            </div>
            <div className={styles.personRow}>
                <div>
                <img src="https://i.pravatar.cc/100" className={styles.custImg}/>
                </div>
                <div>
                    <p>{props.name}</p>
                </div>
            </div>
            <div>
                <p className={styles.text}>{props.review}</p>
            </div>
        </div>
    )
}
export default CustomerCard;