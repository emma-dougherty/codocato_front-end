import React from "react"
import styled from "styled-components"

const LContainer = styled.div`
    background-image: url("http://localhost:8080/lesson_bgs/lesson1_bg-01.svg");
    background-size: cover;
    height: 100vh;
    width: 100vw;

`

const LessonContainer = ({currentLesson}) => {

    return (
        <>
            <h1>THIS IS THE LESSON CONTAINER</h1>
            <LContainer>
            <h1>hello</h1>
                {/* {currentLesson ? <img src = {`http://localhost:8080/${currentLesson.prompts[0].imageSrc}`}/> : null} */}
            </LContainer>
        </>
    )
}

export default LessonContainer