import React from 'react';

function EventDetails({ event }) {
  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{event.date}</p>
    </div>
  );
}

export default EventDetails;