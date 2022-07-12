import React, { useEffect, useState } from "react"
import ProfileItem from "./ProfileItem";
import { CurrentEnrollmentService } from "../services/Services";
import styled from 'styled-components';


const Column = styled.div`
display: flex;
flex-direction: column;
padding: 7vh;
background-color: #38B6FF;
border-radius:10%;
margin: 2vh;
${'' /* background-image: repeating-linear-gradient(45deg, #3ba7ee 0, #3ba7ee 2.5px, transparent 0, transparent 50%);
background-size: 16px 16px;
background-color: #dceef4; */}
`
const SelectProfileTitleStyled = styled.h3`
color: #FCE74A;
font-weight: bold;
font-size:3vh;
font-family: 'Fresh-Steak';
`

const ProfileList = ({ savedProfiles, setCurrentProfile, setAppState, setCurrentLesson, setCurrentEnrollment }) => {

 

    const onProfileClick = (currentProfile) => {

        setCurrentProfile(currentProfile)
        // include passed down method from app.js, that updated currentLesson state based on currentProfile
        
        CurrentEnrollmentService.getcurrentEnrollment(currentProfile.id)
        .then((res) => {
            setCurrentEnrollment(res)
            setCurrentLesson(res.lesson)
        })
        // .then(setAppState("LessonContainer"))

    }

    const profileNodes = savedProfiles.map((profile, index) => {
        return <ProfileItem onProfileClick={onProfileClick} profile={profile} key={index}/>
    }
    )  
    

    return (
        <Column>
            <SelectProfileTitleStyled>OR SELECT YOUR PROFILE</SelectProfileTitleStyled>
            <ul>
                {profileNodes}
            </ul>
        </Column>
    )
}

export default ProfileList;