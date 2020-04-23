import React from 'react';
import NavBar from './components/NavBar'
import NewsFeedContent from './components/NewsFeedContent'

function NewsFeed() {
  return (
    <div className="NewsFeed">
      <NavBar />
      <h1>This is the newsfeed remix</h1>
      <NewsFeedContent />
    </div>
  );
}

export default NewsFeed;