import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const PromptObj = styled.div`
    max-height: 3vh;
`


const GamePrompt = ({ prompt, setSelectedPrompt }) => {

    const handleClick = () => {
        setSelectedPrompt(prompt.name)
    }


    return (
        <>
            <PromptObj>
                <motion.img
                    src={`http://localhost:8080/${prompt.imageSrc}`}
                    onClick={handleClick}
                    whileHover={{ 
                        rotate: [0, 0, 10, -10, 0],
                        scale: 1.05
                    }}
                    style={{height: "10vh"}}
                    
                />
            </PromptObj>
        </>
    )
}

export default GamePrompt 