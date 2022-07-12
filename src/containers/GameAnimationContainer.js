import React, {useEffect} from "react"
import styled from "styled-components"
import Animation from "../components/Animation"

   // CHARACTER APPEARING IN CENTRE, NEEDS TO ALIGN LEFT, ALSO REPEATING UNDERNEATH

const LContainer = styled.div`
background-image: ${props => `url(${props.bgimage})`};
    background-size: cover;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;

`

const GameAnimationContainer = ({appState, setAppState, currentLesson}) => {


useEffect(() => {
    const timer = setTimeout(() => {
        setAppState("GameContainer")
    }, 10000)
    return () => clearTimeout(timer);
    
}, [])


const handleClick = () => {
    setAppState("GameContainer")
}

return (
    <>
    <LContainer bgimage = {`http://localhost:8080/lesson_bgs/${currentLesson.bgImgUrl}`}>
        <Animation setAppState = {setAppState} appState = {appState}/>
    </LContainer>
    <button onClick = {handleClick}>Continue</button>
    </>
)
}

export default GameAnimationContainer