import React from "react"
import styled from "styled-components"
import Animation from "../components/Animation"

   // CHARACTER APPEARING IN CENTRE, NEEDS TO ALIGN LEFT, ALSO REPEATING UNDERNEATH

const LContainer = styled.div`
background-image: url("http://localhost:8080/lesson_bgs/lesson1_bg-01.svg");
background-size: cover;
height: 100vh;
overflow: hidden;

`

const GameAnimationContainer = ({setAppState}) => {

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
    setAppState("GameContainer")
}

return (
    <>
    <LContainer>
        <Animation/>
    </LContainer>
    <button onClick = {handleClick}>Continue</button>
    </>
)
}

export default GameAnimationContainer