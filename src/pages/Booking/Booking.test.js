import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { initialize_time,update_times } from "../../utils/time";

import Booking from "./Booking";
const state = [
    "8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00", "18:00", "19:00", "20:00",
];
describe("BookingForm",()=>{
    test("InitializeTimes",()=>{
       
      const initState=initialize_time();
      expect(initState).toEqual(state);
        

    })
})

describe("BookingForm",()=>{
    test("Update Times for Saturday",()=>{
        const normalState = [
            "11:00","12:00","13:00","14:00","15:00","16:00","17:00", 
        ];
          const newState=update_times(state,6);
     
      expect(newState).toEqual(normalState);
        

    })
})

describe("BookingForm",()=>{
    test("Update Times for Tuesday",()=>{
        const normalState = [
            "8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00", 
        ];
          const newState=update_times(state,2);
     
      expect(newState).toEqual(normalState);
        

    })
})
describe("BookingForm",()=>{
    test("Update Times for Friday",()=>{
        const normalState = [
            "14:00","15:00","16:00","17:00", "18:00", "19:00",
        ];
          const newState=update_times(state,5);
      
      expect(newState).toEqual(normalState);
        

    })
})

describe("BookingForm", () => {
    test("Renders labels and fields", () => {


      render(
        <MemoryRouter>
        <Booking/>
        </MemoryRouter>
      );
   
      const choseDateLabel = screen.getByText("Choose date");
      expect(choseDateLabel).toBeInTheDocument();
      const choseDateField = screen.getByTestId("res-date");
      expect(choseDateField).toBeInTheDocument();
  
      const choseTimeLabel = screen.getByText("Choose time");
      expect(choseTimeLabel).toBeInTheDocument();
      const choseTimeField = screen.getByTestId("res-time");
      expect(choseTimeField).toBeInTheDocument();
  
      const numberGuestLabel = screen.getByText("Number of guests");
      expect(numberGuestLabel).toBeInTheDocument();
      const numberGuestField = screen.getByTestId("guests");
      expect(numberGuestField).toBeInTheDocument();
  
      const occasionLabel = screen.getByText("Occasion");
      expect(occasionLabel).toBeInTheDocument();
      const occasionField = screen.getByTestId("reason");
      expect(occasionField).toBeInTheDocument();
  
      const submitButton = screen.getByDisplayValue("Make order");
      expect(submitButton).toBeInTheDocument();
    })});


   