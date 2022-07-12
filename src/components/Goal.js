import React, { useEffect, useState } from "react"
import styled from "styled-components"
import box from "../assets/box.png"
import {motion} from "framer-motion"

const GoalObj = styled.div`
min-height: 5vh;
`

const Goal = ({ prompt, setSelectedGoal, completed }) => {


    const handleClick = () => {
        setSelectedGoal(prompt.name)
    }

    return (
        <>
            <GoalObj onClick={handleClick}>
                <motion.img
                    src={box}
                    height="50"
                    whileHover={{
                        rotate: [0, 0, 10, -10, 0],
                        scale: 1.05
                    }}
                    style={{ height: "10vh" }}
                />
                <h2>{prompt.name}</h2>
                {completed.includes(prompt.name) ? <p>Correct!</p> : null}
            </GoalObj>

        </>
    )
}

export default Goal