import { motion } from "framer-motion"
import React from "react"
import star from "../assets/star1.svg"
import styled from "styled-components"

const StyledStart = styled.div`
height: 100%;
width:100%;
z-index: 1;
`

const ScoreStar = ({ setAppState }) => {

    const handleClick = () => {
        setAppState("GameAnimationContainer")
    }

    return (
        <>
        <motion.div
                    className="splash"
                    initial={{ y: 1000 }}
                    transition={{ duration: 1 }}
                    animate={{ y: 0 }}
                >
            <StyledStart>
                <img src={star} onClick={handleClick} />
            </StyledStart>
            </motion.div>
        </>
    )

}

export default ScoreStar