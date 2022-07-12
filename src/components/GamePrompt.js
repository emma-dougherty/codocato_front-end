import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const PromptObj = styled.div`
    max-height: 3vh;
    opacity: ${props => `${props.opacity}`}
`


const GamePrompt = ({ prompt, setSelectedPrompt, completed }) => {

    const [opacity, setOpacity] = useState(1)

    useEffect(()=> {
        if(completed.includes(prompt.name)){
            setOpacity(0.5)
        }
    }, [completed])

    const handleClick = () => {
        setSelectedPrompt(prompt.name)
    }


    return (
        <>
            <PromptObj opacity = {opacity}>
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