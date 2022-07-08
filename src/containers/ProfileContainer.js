import React from "react"
import NewProfileForm from "../components/NewProfileForm";
import ProfileList from "../components/ProfileList";

const ProfileContainer = ({savedProfiles, setCurrentProfile, addNewProfile, setAppState, setCurrentLesson}) => {


    return (
        <>
            <h2>THIS IS THE PROFILE CONTAINER</h2>
            <ProfileList savedProfiles = {savedProfiles} setCurrentProfile = {setCurrentProfile} setAppState = {setAppState} setCurrentLesson = {setCurrentLesson} />
            <NewProfileForm addNewProfile={addNewProfile}/>
        </>
    )


}

export default ProfileContainer;