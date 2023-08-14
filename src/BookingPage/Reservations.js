import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import axios from "axios";
import Footer from "../Footer";

function Reservations() {
  const [availableTimes, setAvailableTimes] = useState([]);

  function initializeTimes(date) {
    axios
      .get(`https://timeslot-api.vercel.app/api/timeslots?date=${date}`)
      .then((response) => {
        const newAvailableTimes = response.data;
        setAvailableTimes(newAvailableTimes);
      })
      .catch((error) => {
        console.error('Error fetching available times:', error);
      });
  }

  const updateTimes = (selectedDate) => {
    return [
      '12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
    ];
  };

  return (
    <>
    <BookingForm
      availableTimes={availableTimes}
      initializeTimes={initializeTimes}
      updateTimes={updateTimes}
     />
     <Footer/>
      </>
  );
}

export default Reservations;
