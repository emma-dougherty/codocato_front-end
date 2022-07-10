import React, {useState} from "react"
import styled from "styled-components"
import Prompt from "../components/Prompt"
import ScoreStar from "../components/ScoreStar"

const LContainer = styled.div`
    background-image: url("http://localhost:8080/lesson_bgs/lesson1_bg-01.svg");
    background-size: cover;
    height: 100vh;
    width: 100vw;

`

const LessonContainer = ({currentLesson}) => {

    const [clickedPrompts, setClickedPrompts] = useState([])


    const promptNodes = currentLesson.prompts.map((prompt, index) => {
        return <Prompt prompt = {prompt} setClickedPrompts = {setClickedPrompts} clickedPrompts = {clickedPrompts} key = {index}/>
    })

    console.log(currentLesson)

    return (
        <>

            <LContainer>

                {promptNodes}

                {clickedPrompts.length == 4 ? <ScoreStar/> : null}
            
            </LContainer>
        </>
    )
}

export default LessonContainer