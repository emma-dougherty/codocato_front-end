import './App.css';
import React, {useState, useEffect} from "react"
import ProfileContainer from './containers/ProfileContainer';
import {PlayerService, LessonService, EnrollmentService, PostPlayer, CurrentEnrollmentService} from './services/Services';
import LessonContainer from './containers/LessonContainer';
import AnimationContainer from './containers/AnimationContainer';
import GameAnimationContainer from './containers/GameAnimationContainer';
import GameWinAnimationContainer from './containers/GameWinAnimationContainer';
import GameContainer from './containers/GameContainer';
import { PostEnrollment } from './services/Services';


function App() {

  const [appState, setAppState] = useState("ProfileContainer");
  const [currentProfile, setCurrentProfile] = useState(null);
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [savedLessons, setSavedLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(null);
  // const [savedEnrollments, setSavedEnrollments] = useState([]);
  const [currentEnrollment, setCurrentEnrollment] = useState(null);

  useEffect(() => {
    PlayerService.getPlayers()
    .then(profile => setSavedProfiles(profile))
    LessonService.getLessons()
    .then(lesson => setSavedLessons(lesson))
    // EnrollmentService.getEnrollments()
    // .then(enrollment => setSavedEnrollments(enrollment))
}, [])

const addNewProfile = (newProfile) => {
  PostPlayer(newProfile)
  .then(profileWithId => {
    const newProfilesList = [...savedProfiles, profileWithId]
    setSavedProfiles(newProfilesList)
    setCurrentProfile(profileWithId)

    CurrentEnrollmentService.getcurrentEnrollment(profileWithId.id)
        .then((res) => {
          setCurrentLesson(res.lesson)
          setCurrentEnrollment(res)
        })
        }
      )
      }
        // .then(setAppState("LessonContainer"))
        // CHECK ABOUT USING THENS WHERE YOU DONT USE THE RETURN


const updateCurrentLesson = () => {
  
  // const tempEnrollment = currentEnrollment
  const tempEnrollment = {...currentEnrollment, complete: true}
  PostEnrollment(tempEnrollment)
  
  .then(CurrentEnrollmentService.getcurrentEnrollment(currentProfile.id))
  
  .then((res) => {
    setCurrentEnrollment(res)
    setCurrentLesson(res.lesson)})
}



  return (
    <>
      {appState === "ProfileContainer" && <ProfileContainer savedProfiles = {savedProfiles} setCurrentProfile = {setCurrentProfile} addNewProfile={addNewProfile} setAppState = {setAppState} setCurrentLesson = {setCurrentLesson} currentLesson = {currentLesson} setCurrentEnrollment = {setCurrentEnrollment}/>}
      {appState === "LessonContainer" && <LessonContainer currentLesson = {currentLesson} setAppState = {setAppState}/>}
      {appState === "AnimationContainer" && <AnimationContainer setAppState = {setAppState} />}
      {appState === "GameAnimationContainer" && <GameAnimationContainer setAppState ={setAppState} />}
      {appState === "GameContainer" && <GameContainer setAppState = {setAppState} updateCurrentLesson = {updateCurrentLesson} currentLesson = {currentLesson}/>}
      {appState === "GameWinAnimationContainer" && <GameWinAnimationContainer/>}

    </>
  );
}

export default App;
