import React, {useEffect} from "react"
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
    <LContainer>
        <Animation setAppState = {setAppState}/>
    </LContainer>
    <button onClick = {handleClick}>Continue</button>
    </>
)
}

export default GameAnimationContainer