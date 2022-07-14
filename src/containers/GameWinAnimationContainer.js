import React, {useEffect} from "react"
import styled from "styled-components"
import Animation from "../components/Animation"
import lesson2_bg from "../assets/lesson2-intro-bg.jpg"

const LContainer = styled.div`
    background-color: #368DCE;
    background-size: cover;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    `

const GameWinAnimationContainer = ({appState, setAppState, currentLesson}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setAppState("LessonContainer")
        }, 15100)
        return () => clearTimeout(timer);
        
    }, [])

    const handleClick = () => {
        setAppState("LessonContainer")
    }
    
    return (
        <>
        <LContainer bgimage = {lesson2_bg}>
            <Animation appState = {appState}/>
        </LContainer>
        <button onClick = {handleClick}>Continue</button>
        </>
    )
}

export default GameWinAnimationContainer