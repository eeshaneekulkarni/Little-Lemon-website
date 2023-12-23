import styles from "./ConfirmationPanel.module.css"
const ConfirmationPanel = (props)=>{

    return (
        
        <div className={styles.container}>
            <h2>Order details:</h2>
         <div className={styles.rows}>
         <div className={styles.row}><strong>Date:</strong> {props.date}</div>
         <div className={styles.row}><strong>Time:</strong> {props.time}</div>
         <div className={styles.row}><strong>Guests:</strong> {props.guests}</div>
         <div className={styles.row}><strong>Occasion:</strong> {props.reason}</div>
         </div>
      
        
        </div>
    )
}
export default ConfirmationPanel;