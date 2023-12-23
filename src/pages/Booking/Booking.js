
import Nav from "../../components/Nav/Nav";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import {useReducer, useEffect } from "react";
import { initialize_time,update_times } from "../../utils/time";

const Booking = ()=>{

const reducer=(state,action)=>{
    switch (action.type){
        case "INITIALIZE_TIMES":
          return initialize_time();
            

        case "UPDATE_TIMES":
                return update_times(state,action.date)
         
        default:
            return state
    }
};
const [available_times,dispatch]=useReducer(reducer,[]);
useEffect(()=>{
    dispatch({type:"INITIALIZE_TIMES"})
},[])

return (
    <div>
        <Nav/>
        <Form dispatch={dispatch} times={available_times}/>
        <Footer/>
    </div>
)
}

   

export default Booking;
