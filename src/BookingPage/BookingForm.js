import React, { useState, useReducer } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react';

const initialState = [
  '12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TIMES':
      return action.times;
    default:
      return state;
  }
}

function BookingForm({ availableTimes, updateTimes }) {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [time, setTime] = useState('');

  const [state, dispatch] = useReducer(reducer, availableTimes);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Reservation submitted:', { date, guests, occasion, selectedTime: state });
  };

  return (
    <Box p={4} width="400px" mx="auto">
        <Text>Book a Reservation</Text>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Date:</FormLabel>
                        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </FormControl>

          <FormControl mt={2}>
            <FormLabel>Time:</FormLabel>
              <Select value={time} onChange={(e) => {
                const newTimes = updateTimes(e.target.value);
                dispatch({ type: 'SET_TIMES', times: newTimes });}}
                 required>
                <option value="" disabled>Select a Time</option>
                {availableTimes.map((availableTime) => (
                  <option key={availableTime} value={availableTime}>
                    {availableTime}
                  </option>
              ))}
              </Select>
          </FormControl>

          <FormControl mt={2}>
            <FormLabel>Number of Guests:</FormLabel>
            <Input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} required min={1} />
          </FormControl>

          <FormControl mt={2}>
            <FormLabel>Occasion:</FormLabel>
              <Select value={occasion} onChange={(e) => setOccasion(e.target.value)} required >
                <option value="">Select an Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </Select>
        </FormControl>

        <Button type="submit" colorScheme="teal" mt={4}>
          Submit Reservation
        </Button>
      </form>
    </Box>
  );
};

export default BookingForm;
