import React, {useEffect} from "react"
import ProfileItem from "./ProfileItem";


const ProfileList = ({savedProfiles, setCurrentProfile}) => {

    const onProfileClick = (currentProfile) => {

        setCurrentProfile(currentProfile)
        
    }

    const profileNodes = savedProfiles.map((profile, index) => {
        return <ProfileItem onProfileClick = {onProfileClick} profile = {profile} key = {index}>{profile.name}</ProfileItem>
    })

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