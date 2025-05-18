import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;