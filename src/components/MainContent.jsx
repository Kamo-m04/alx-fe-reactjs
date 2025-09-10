import React from 'react';
import UserProfile from './UserProfile';

const MainContent = () => {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <p>Here is a list of my favorite cities and some details about them.</p>
      {/* Assuming you still have your UserProfile components here */}
      <UserProfile name="Paris" bio="The capital of France, known for its art, fashion, and culture." />
      <UserProfile name="Tokyo" bio="The bustling capital of Japan, where tradition meets ultramodern." />
      <UserProfile name="Sydney" bio="Famous for its harborfront Opera House and beautiful beaches." />
    </main>
  );
};

export default MainContent;