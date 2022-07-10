import React from "react"
import star from "../assets/star1.svg"

const ScoreStar = ({setAppState}) => {

    const handleClick = () => {
        setAppState("GameAnimationContainer")
    }

    return(
        <>
            <img src = {star} onClick = {handleClick}/>
        </>
    )

}

export default ScoreStar