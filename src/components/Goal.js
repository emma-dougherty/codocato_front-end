import React from "react"
import styled from "styled-components"
import box_boolean from "../assets/box-boolean.svg"
import box_float from "../assets/box-float.svg"
import box_integer from "../assets/box-integer.svg"
import box_string from "../assets/box-string.svg"
import {motion} from "framer-motion"

const GoalObj = styled.div`
font-family:'Fresh-Steak';
min-height: 5vh;
`

const GoalName = styled.h2`
font-family:'Fresh-Steak';
color:#fce74a;
font-size: 3.1vh;
`


const Goal = ({ prompt, setSelectedGoal, completed }) => {


    const handleClick = () => {
        setSelectedGoal(prompt.name)
    }

    const checkBoxName = () => {
        if(prompt.name === "boolean"){
            return box_boolean
        }else if(prompt.name === "float"){
            return box_float
        } else if(prompt.name === "integer"){
            return box_integer
        } else if(prompt.name === "string"){
            return box_string
        }
    }

    return (
        <>
            <GoalObj onClick={handleClick}>
                <motion.img
                    src={checkBoxName()}
                    height="50"
                    whileHover={{
                        rotate: [0, 0, 10, -10, 0],
                        scale: 1.05
                    }}
                    style={{ height: "10vh" }}
                />
                <GoalName>{prompt.name}</GoalName>
                {completed.includes(prompt.name) ? <p>Correct!</p> : null}
            </GoalObj>

        </>
    )
}

export default Goal