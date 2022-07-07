import './App.css';
import React, {useState, useEffect} from "react"
import ProfileContainer from './containers/ProfileContainer';
import {PlayerService, LessonService, EnrollmentService} from './services/Services';


function App() {

  const [appState, setAppState] = useState("ProfileContainer");
  const [currentProfile, setCurrentProfile] = useState(null);
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [savedLessons, setSavedLessons] = useState([]);
  const [savedEnrollments, setSavedEnrollments] = useState([]);

  useEffect(() => {
    PlayerService.getPlayers()
    .then(profile => setSavedProfiles(profile))
    LessonService.getLessons()
    .then(lesson => setSavedLessons(lesson))
    EnrollmentService.getEnrollments()
    .then(enrollment => setSavedEnrollments(enrollment))
}, [])


  return (
    <>
      <h1>THIS IS THE APP CONTAINER</h1>
      {appState === "ProfileContainer" && <ProfileContainer savedProfiles = {savedProfiles} setCurrentProfile = {setCurrentProfile}/>}
    </>
  );
}

export default App;
