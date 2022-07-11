import React, {useEffect} from "react"
import styled from "styled-components"
import Animation from "../components/Animation"

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

const GameWinAnimationContainer = ({setAppState}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setAppState("LessonContainer")
        }, 10000)
        return () => clearTimeout(timer);
        
    }, [])

    const handleClick = () => {
        setAppState("LessonContainer")
    }
    
    return (
        <>
        <LContainer bgimage = {`http://localhost:8080/lesson_bgs/${currentLesson.bgImgUrl}`}>
            <Animation/>
        </LContainer>
        <button onClick = {handleClick}>Continue</button>
        </>
    )
}

export default GameWinAnimationContainer