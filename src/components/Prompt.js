import React, { useState } from "react"
import { OverlayTrigger } from "react-bootstrap"
import styled from "styled-components"
import Popover from "react-bootstrap/Popover"
import Button from 'react-bootstrap/Button';

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

const ImagePrompt = styled.img`
height : 8vh;
`

const Prompt = ({ prompt, setClickedPrompts, clickedPrompts }) => {

    const popover = (
        <StyledPop>
            <Popover id="popover-basic" >
                <StyledPopHeader as="h1">{prompt.name}</StyledPopHeader>
                <StyledPopBody>
                    <p>{prompt.fact}</p>
                    {/* <button onClick={}>X</button> */}
                </StyledPopBody>
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
            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popover}>
                <ImagePrompt src={`http://localhost:8080/${prompt.imageSrc}`} onClick={handleClick} />
            </OverlayTrigger>

        </>
    )
}

export default Prompt;