import './App.css';
import React, {useState, useEffect} from "react"
import ProfileContainer from './containers/ProfileContainer';
import {PlayerService} from './services/Services';

function App() {

  const [appState, setAppState] = useState("ProfileContainer");
  const [currentProfile, setCurrentProfile] = useState(null);
  const [savedProfiles, setSavedProfiles] = useState([
    // {
    //   "name" : "Matt",
    //   "score" : 0,
    //   "_id" : 45355412542545142525
    // },
    // {
    //   "name" : "Silvia",
    //   "score" : 0,
    //   "_id" : 53443534545343414
    // },
    // {
    //   "name" : "Mario",
    //   "score" : 0,
    //   "_id" : 3314343143413
    // },
    // {
    //   "name" : "Emma",
    //   "score" : 0,
    //   "_id" : 21312312311434
    // }
  ]);

  // useEffect to load all savedProfiles on initial render

  useEffect(() => {
    PlayerService.getPlayers()
    .then(profile => setSavedProfiles(profile))
    
}, [])


  return (
    <>
      <h1>THIS IS THE APP CONTAINER</h1>
      {appState === "ProfileContainer" && <ProfileContainer savedProfiles = {savedProfiles} setCurrentProfile = {setCurrentProfile}/>}
    </>
  );
}

export default App;
