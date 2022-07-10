import React, { useEffect, useState } from "react"
import ProfileItem from "./ProfileItem";
import { CurrentEnrollmentService } from "../services/Services";


const ProfileList = ({ savedProfiles, setCurrentProfile, setAppState, setCurrentLesson }) => {

 

    const onProfileClick = (currentProfile) => {

        setCurrentProfile(currentProfile)
        // include passed down method from app.js, that updated currentLesson state based on currentProfile
        
        CurrentEnrollmentService.getcurrentEnrollment(currentProfile.id)
        .then((res) => setCurrentLesson(res.lesson))
        // .then(setAppState("LessonContainer"))

    }

    const profileNodes = savedProfiles.map((profile, index) => {
        return <ProfileItem onProfileClick={onProfileClick} profile={profile} key={index}/>
    }
    )  
    

    return (
        <>
            <h3>THIS IS THE PROFILE LIST COMPONENT</h3>
            <ul>
                {profileNodes}
            </ul>
        </>
    )
}

export default ProfileList;