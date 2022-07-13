import React, { useState } from "react"
import styled from "styled-components"
import Modal from "react-modal";

const ModalWrapper = styled.div`
`

const ImagePrompt = styled.img`
height : 8vh;
position: absolute;
top: ${props => `${props.positionX}vh`};
left:${props => `${props.positionY}vw`};
`

const Prompt = ({ prompt, setClickedPrompts, clickedPrompts }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        if (!clickedPrompts.includes(prompt)) {
            const temp = [...clickedPrompts, prompt]
            setClickedPrompts(temp)
        }

        setIsModalOpen(!isModalOpen)

    }

    const handleModalClick = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <>
            <ModalWrapper onClick={handleModalClick} >
            <Modal
                isOpen={isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
                onClick = {handleModalClick}
                className = "prompt-popup-modal"
                overlayClassName = "prompt-popup-modal-overlay"
            >
                <img src={`http://localhost:8080/${prompt.imageSrc}`} id="prompt-title"/>
                <p id="prompt-fact">{prompt.fact}</p>
            </Modal>
            </ModalWrapper>


            <ImagePrompt src={`http://localhost:8080/${prompt.imageSrc}`} onClick={handleClick} positionX={prompt.positionX} positionY={prompt.positionY} />

        </>
    )
}

export default Prompt;