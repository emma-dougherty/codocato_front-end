import './App.css';
import React, {useState, useEffect} from "react"
import ProfileContainer from './containers/ProfileContainer';
import {PlayerService, LessonService, EnrollmentService, PostPlayer, CurrentEnrollmentService} from './services/Services';
import LessonContainer from './containers/LessonContainer';


function App() {

  const [appState, setAppState] = useState("ProfileContainer");
  const [currentProfile, setCurrentProfile] = useState(null);
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [savedLessons, setSavedLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(null);
  // const [savedEnrollments, setSavedEnrollments] = useState([]);

  useEffect(() => {
    PlayerService.getPlayers()
    .then(profile => setSavedProfiles(profile))
    LessonService.getLessons()
    .then(lesson => setSavedLessons(lesson))
    // EnrollmentService.getEnrollments()
    // .then(enrollment => setSavedEnrollments(enrollment))
}, [])

const addNewProfile = (newProfile) => {
  PostPlayer(newProfile).then(profileWithId => {
    const newProfilesList = [...savedProfiles, profileWithId]
    setSavedProfiles(newProfilesList)
    setCurrentProfile(profileWithId)
    setAppState("LessonContainer")

    CurrentEnrollmentService.getcurrentEnrollment(profileWithId.id)
        .then((res) => setCurrentLesson(res.lesson))

  })
}


  return (
    <>
      <h1>THIS IS THE APP CONTAINER</h1>
      {appState === "ProfileContainer" && <ProfileContainer savedProfiles = {savedProfiles} setCurrentProfile = {setCurrentProfile} addNewProfile={addNewProfile} setAppState = {setAppState} setCurrentLesson = {setCurrentLesson}/>}
      {appState === "LessonContainer" && <LessonContainer currentLesson = {currentLesson}/>}
    </>
  );
}

export default App;
