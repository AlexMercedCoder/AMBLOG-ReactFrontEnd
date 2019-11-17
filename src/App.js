import React from 'react';
import Nav from './nav';
import PostsContainer from './postscontainer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <h1>Alex Merced Blog - React Front-End</h1>
        <PostsContainer/>
    </div>
  );
}

export default App;
