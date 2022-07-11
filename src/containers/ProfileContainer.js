import React from "react"
import NewProfileForm from "../components/NewProfileForm";
import ProfileList from "../components/ProfileList";

const ProfileContainer = ({savedProfiles, setCurrentProfile, addNewProfile, setAppState, setCurrentLesson, currentLesson, setCurrentEnrollment}) => {

    const handleClick = () => {
        setAppState("AnimationContainer")
    }

    return (
        <>
            <h2>THIS IS THE PROFILE CONTAINER</h2>
            <ProfileList savedProfiles = {savedProfiles} setCurrentProfile = {setCurrentProfile} setAppState = {setAppState} setCurrentLesson = {setCurrentLesson} setCurrentEnrollment = {setCurrentEnrollment} />
            <NewProfileForm addNewProfile={addNewProfile}/>
            {currentLesson ? <button onClick={handleClick}>Start</button> : null}
        </>
    )


}

export default ProfileContainer;