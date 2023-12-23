import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css"


const Form = (props)=>{
  

    const navigate=useNavigate();
    const formik= useFormik({
        initialValues: {
            date: new Date().toISOString().slice(0, 10),
            time: props.times[0],
            guests: 1,
            reason: "birthday",
          },
           onSubmit:(values)=>{
           localStorage.setItem("Bookings",JSON.stringify(values));
            navigate("/confirmation")
    
        },
        validationSchema: Yup.object({
          date: Yup.date().required("Date is required"),
          time: Yup.string().oneOf(props.times).required("Time is required"),
          guests: Yup.number().min(1, "Must be at least 1").max(10, "Must be at most 10").required("Number of guests is required"),
          reason: Yup.string().oneOf(["birthday", "engagement", "anniversary"]).required("Occasion is required"),
        })
    });
    useEffect(() => {
        const day=new Date(formik.values.date).getDay();
      
        props.dispatch({ type: "UPDATE_TIMES",date:day});
    
      }, [formik.values.date]);
 
   
    return (
        <div className={styles.container}>
            
            <h1 className={styles.h1}>Order a table!</h1>
            <div className={styles.form}>
            <form onSubmit={formik.handleSubmit} noValidate>
                <div className={styles.inputItem}>
             <label htmlFor="date">Choose date</label>
             <input className={styles.input} type="date" id="date"  data-testid="res-date" {...formik.getFieldProps("date")}/>
             <p className={styles.error} data-testid="res-date-error">  {formik.touched.date && formik.errors.date} </p>
             </div>
             <div className={styles.inputItem}>
             <label htmlFor="time">Choose time</label>
             <select className={styles.input} id="time" data-testid="res-time" {...formik.getFieldProps("time") }> 
                 {
                     props.times.map((time)=>{
                         return <option value={time} key={time}>{time}</option>
                     })
                 }
            </select>
            <p className={styles.error}  data-testid="res-time-error">{formik.touched.time && formik.errors.time}</p>
            </div>
            <div className={styles.inputItem}>
             <label htmlFor="guests">Number of guests</label>
             <input id="guests" type="number" placeholder="1" min="1" max="10" className={styles.input} {...formik.getFieldProps("guests")}  data-testid="guests" />
             <p className={styles.error} data-testid="guests-error">    {formik.touched.guests && formik.errors.guests}</p>
             </div>
             <div className={styles.inputItem}>
             <label htmlFor="reason" id="reason">Occasion</label>
             <select className={styles.input}  id="reason"{...formik.getFieldProps("reason")} data-testid="reason" >
                 <option value="anniversary" className="opt">Anniversary</option>
                 <option value="birthday" className="opt">Birthday</option>
                 <option value="engagement" className="opt">Engagement</option>
             </select>
             <p className={styles.error}  data-testid="reason-error">    {formik.touched.reason && formik.errors.reason} </p>
             </div>
             <div className={styles.inputItem}>
             <input type="submit" value="Make order" className={styles.input} data-testid="submit-btn"/>
             </div>
            </form>
            </div>
         
        </div>
     )
    
}
  

export default Form;