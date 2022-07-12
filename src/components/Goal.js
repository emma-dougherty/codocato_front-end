import React from "react"

const Goal = ({prompt, setSelectedGoal}) => {

    const handleClick = () => {
        setSelectedGoal(prompt.name)
    }

    return(
        <>
            <img src={`http://localhost:8080/${prompt.imageSrc}`} onClick = {handleClick}/>
        </>
    )
}

export default Goal