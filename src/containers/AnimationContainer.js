import React, {setTimeout, useEffect} from "react"
import styled from "styled-components"
import Animation from "../components/Animation"


const LContainer = styled.div`
    background-image: url("http://localhost:8080/lesson_bgs/lesson1_bg-01.svg");
    background-size: cover;
    height: 100vh;
    width: 100vw;

`

const AnimationContainer = ({setAppState}) => {

    //THIS IS HOW WE WANT TO RENDER THE ANIMATION AND DISMISS THE CONTAINER AUTOMATICALLY BASED ON TIME - CURRENTLY NOT WORKING

    // useEffect(() => {
    //     timer();
    //     return () => clearTimeout(timer);
    // }, [])
    
    // const timer = setTimeout(() => {
    //     runTimer()
    // }, 9040)

    // const runTimer = () => {
    //     setAppState("LessonContainer")
    // }

    const handleClick = () => {
        setAppState("LessonContainer")
    }
    
    return (
        <>
        <LContainer>
            <Animation/>
            <h1>THIS IS THE ANIMATION CONTAINER</h1>
        </LContainer>
        <button onClick = {handleClick}>Continue</button>
        </>
    )
}

export default AnimationContainer