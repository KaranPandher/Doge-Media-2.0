import React from 'react';
import NavBar from './components/NavBar';
import ProfileCover from './components/ProfileCover';
import ProfileCard from './components/ProfileCard';
import ProfileMenu from './components/ProfileMenu';

function Profile() {
  return (
    <div className="Profile">
      <NavBar />
      <ProfileCover />
      <ProfileCard />
      <ProfileMenu />
    </div>
  );
}

export default Profile;