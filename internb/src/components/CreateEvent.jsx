import React, { useState } from 'react';
import axios from 'axios';

function CreateEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/events', { title, description, date })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        <br />
        <label>Description:</label>
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        <br />
        <label>Date:</label>
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        <br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;