import React, { useState } from "react";
import BookingForm from "./BookingForm";

function Reservations() {
    const [availableTimes, setAvailableTimes] = useState([
        '12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
      ]);

    const updateTimes = (selectedDate) => {
        //returning times regardless of date
        return [
          '12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
        ];
      };

    return(
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
    )
}

export default Reservations