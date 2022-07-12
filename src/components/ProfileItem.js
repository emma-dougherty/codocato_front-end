import React from 'react';
import styled from 'styled-components';


const ListProfileItemStyled = styled.li`
font-weight: bold;
list-style-type: none;
font-size: 2vh;
color: #FFFFFF;
cursor: pointer;
font-family: 'Fresh-Steak';
&:hover{
    background-color: #FCE74A;
    color: #FF6666;
}
&:focus{
    color: #FFFFFF ;
}
padding: 1.5vh;
border-radius: 0.1vh;
`

const ProfileAvatarImageStyled = styled.img`
max-height:5vh;
`

const ProfileItem = ({profile, onProfileClick}) => {

  const handleClick = function(){
    onProfileClick(profile);
  }

  

  return (
  <>
    {/* <ProfileAvatarImageStyled src={`http://localhost:8080/${profile.avatar}`}/> */}
    {/* <li>{profile.avatar}</li> */}
    <ListProfileItemStyled onClick={handleClick}> <ProfileAvatarImageStyled src={`http://localhost:8080/${profile.avatar}`}/>{profile.name}</ListProfileItemStyled>
  </>
  )
}

export default ProfileItem;