import React from "react"
import styled from "styled-components"
import Prompt from "../components/Prompt"

const LContainer = styled.div`
    background-image: url("http://localhost:8080/lesson_bgs/lesson1_bg-01.svg");
    background-size: cover;
    height: 100vh;
    width: 100vw;

`

const LessonContainer = ({currentLesson}) => {


    const promptNodes = currentLesson.prompts.map((prompt, index) => {
        return <Prompt prompt = {prompt} key = {index}/>
    })

    console.log(currentLesson)

    return (
        <>

            <LContainer>

                {promptNodes}
            
            </LContainer>
        </>
    )
}

export default LessonContainer