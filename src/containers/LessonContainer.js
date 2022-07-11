import React, {useState} from "react"
import styled from "styled-components"
import Prompt from "../components/Prompt"
import ScoreStar from "../components/ScoreStar"

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

const PromptContainer = styled.div`
display: flex;
justify-content: space-around;
`

const LessonContainer = ({currentLesson, setAppState}) => {

    const [clickedPrompts, setClickedPrompts] = useState([])


    const promptNodes = currentLesson.prompts.map((prompt, index) => {
        return <Prompt prompt = {prompt} setClickedPrompts = {setClickedPrompts} clickedPrompts = {clickedPrompts} key = {index}/>
    })

    // console.log(currentLesson)

    return (
        <>

            <LContainer bgimage = {`http://localhost:8080/lesson_bgs/${currentLesson.bgImgUrl}`}>

                <PromptContainer>
                {promptNodes}
                </PromptContainer>

                {clickedPrompts.length == 4 ? <ScoreStar setAppState = {setAppState}/> : null}
            
            </LContainer>
        </>
    )
}

export default LessonContainer