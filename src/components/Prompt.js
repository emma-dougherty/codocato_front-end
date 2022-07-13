import React, { useState } from "react"
import { OverlayTrigger } from "react-bootstrap"
import styled from "styled-components"
import Popover from "react-bootstrap/Popover"
import Button from 'react-bootstrap/Button';
import Modal from "react-modal";

const StyledPop = styled.div`
background-color: white;
border: 10px solid #d0d0d0;
border-color: #003399;
border-radius: 20px;
padding-left: 40px;
padding-right: 40px;
margin: 40px;
`


const StyledPopHeader = styled.div`
font-size: xx-large;
text-transform: uppercase;

`

const StyledPopBody = styled.div`
font-size: x-large;

`

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

    // const popover = (
    //     <StyledPop>
    //         <Popover id="popover-basic" >
    //             <StyledPopHeader as="h1">{prompt.name}</StyledPopHeader>
    //             <StyledPopBody>
    //                 <p>{prompt.fact}</p>
    //                 {/* <button onClick={}>X</button> */}
    //             </StyledPopBody>
    //         </Popover>
    //     </StyledPop>
    // );

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
            {/* <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popover}> */}
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
            {/* </OverlayTrigger> */}

        </>
    )
}

export default Prompt;