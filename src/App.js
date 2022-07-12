import './App.css';
import React, { useState, useEffect } from "react"
import ProfileContainer from './containers/ProfileContainer';
import { PlayerService, LessonService, EnrollmentService, PostPlayer, CurrentEnrollmentService } from './services/Services';
import LessonContainer from './containers/LessonContainer';
import AnimationContainer from './containers/AnimationContainer';
import GameAnimationContainer from './containers/GameAnimationContainer';
import GameWinAnimationContainer from './containers/GameWinAnimationContainer';
import GameContainer from './containers/GameContainer';
import IntroAnimationContainer from './containers/IntroAnimationContainer'
import { PostEnrollment } from './services/Services';
import AnimatedCursor from 'react-animated-cursor';



function App() {

  const [appState, setAppState] = useState("IntroAnimationContainer");
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


  const updateCurrentLesson = () => {

    const tempEnrollment = { ...currentEnrollment, complete: true }
    PostEnrollment(tempEnrollment)

      .then(() => CurrentEnrollmentService.getcurrentEnrollment(currentProfile.id))
      .then((res) => {
        setCurrentEnrollment(res)
        setCurrentLesson(res.lesson)
      })
  }


  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={8}
        color='252, 231, 74'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={20}
        trailingSpeed={20}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      {appState === "IntroAnimationContainer" && <IntroAnimationContainer setAppState={setAppState} appState={appState} />}
      {appState === "ProfileContainer" && <ProfileContainer savedProfiles={savedProfiles} setCurrentProfile={setCurrentProfile} addNewProfile={addNewProfile} setAppState={setAppState} setCurrentLesson={setCurrentLesson} currentLesson={currentLesson} setCurrentEnrollment={setCurrentEnrollment} />}
      {appState === "LessonContainer" && <LessonContainer currentLesson={currentLesson} setAppState={setAppState} />}
      {appState === "AnimationContainer" && <AnimationContainer setAppState={setAppState} currentLesson={currentLesson} appState={appState} />}
      {appState === "GameAnimationContainer" && <GameAnimationContainer setAppState={setAppState} currentLesson={currentLesson} appState={appState} />}
      {appState === "GameContainer" && <GameContainer setAppState={setAppState} updateCurrentLesson={updateCurrentLesson} currentLesson={currentLesson} />}
      {appState === "GameWinAnimationContainer" && <GameWinAnimationContainer setAppState={setAppState} currentLesson={currentLesson} appState={appState} />}

    </>
  );
}

export default App;
