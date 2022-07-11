import React from "react"

const GamePrompt = ({prompt, setSelectedPrompt}) => {

    const handleClick = () => {
        setSelectedPrompt(prompt.name)
    }

    return(
        <>
            <img src={`http://localhost:8080/${prompt.imageSrc}`} onClick = {handleClick}/>
        </>
    )
}

export default GamePrompt 