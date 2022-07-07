import React from 'react';

const ProfileItem = ({profile, onProfileClick}) => {

  const handleClick = function(){
    onProfileClick(profile);
  }


  return <li onClick={handleClick}>{profile.name}</li>
}

export default ProfileItem;