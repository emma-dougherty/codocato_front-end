import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Prompt from "../components/Prompt"
import ScoreStar from "../components/ScoreStar"
import Modal from "react-modal"

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
const StarContainer = styled.div`
    ${'' /* display: flex;
    justify-content: center; */}
    width: 40vw;
    margin: auto;
`

const PromptContainer = styled.div`
display: flex;
justify-content: space-around;
`

const LessonContainer = ({ currentLesson, setAppState }) => {



    const [clickedPrompts, setClickedPrompts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (clickedPrompts.length == 4) {
            setIsModalOpen(true)
        }
    }, [clickedPrompts])


    const promptNodes = currentLesson.prompts.map((prompt, index) => {
        return <Prompt prompt={prompt} setClickedPrompts={setClickedPrompts} clickedPrompts={clickedPrompts} key={index} />
    })

    return (
        <>

            <Modal
                isOpen={isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0, 0.5)'
                    },
                    content: {
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        border: 0,
                    }
                }}
            >
                <StarContainer>
                    {clickedPrompts.length == 4 ? <ScoreStar setAppState={setAppState} nextState = "GameContainer" /> : null}
                </StarContainer>
            </Modal>

            <LContainer bgimage={`http://localhost:8080/lesson_bgs/${currentLesson.bgImgUrl}`}>

                <PromptContainer>
                    {promptNodes}
                </PromptContainer>
            </LContainer>
        </>
    )
}

export default LessonContainer