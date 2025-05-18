import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import EventDetails from './components/EventDetails';
import Login from './components/Login';
import ImageUpload from './components/ImageUpload';
import Server from './components/server';

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/" exact component={EventList} />
    //     <Route path="/create-event" component={CreateEvent} />
    //     <Route path="/events/:id" component={EventDetails} />
    //   </Switch>
    // </BrowserRouter>
<>
<Login/>
<EventList/>
<EventDetails/>
<CreateEvent/>
<ImageUpload/>
</>
  );
}

export default App;