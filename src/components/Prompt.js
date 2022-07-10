import React from "react"
import { OverlayTrigger } from "react-bootstrap"
import styled from "styled-components"
import Popover from "react-bootstrap/Popover"

const StyledPop = styled.div`
background-color: pink;
`

const ImagePrompt = styled.img`
height : 7vh;
`

const Prompt = ({ prompt, setClickedPrompts, clickedPrompts }) => {

    const popover = (
        <StyledPop>
            <Popover id="popover-basic">
                <Popover.Header as="h3">{prompt.name}</Popover.Header>
                <Popover.Body>
                    <p>{prompt.fact}</p>
                </Popover.Body>
            </Popover>
        </StyledPop>
    );

    const handleClick = () => {
        if (!clickedPrompts.includes(prompt)) {
            const temp = [...clickedPrompts, prompt]
            setClickedPrompts(temp)
        }

    }

    return (
        <>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <ImagePrompt src={`http://localhost:8080/${prompt.imageSrc}`} onClick={handleClick} />
            </OverlayTrigger>

        </>
    )
}

export default Prompt;