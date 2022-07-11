import React, { useEffect } from "react"
import lottie from "lottie-web"
import lesson1_intro from "../assets/lesson1_intro.json"
import styled from "styled-components"

const AnimationBlock = styled.div `
height: 100vh;

`

const Animation = ({setAppState}) => {

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: document.querySelector("#lesson1_intro"),
            animationData: lesson1_intro,
            renderer: "svg", // "canvas", "html"
            loop: false, // boolean
            autoplay: true, // boolean
        });
        // MAYBE HAVE ANOTHER LOOK AT THIS!
        
        // anim.onLoopComplete = function() {
        //     setAppState("GameContainer")
        //     console.log("This is working")
        // }

        // anim.addEventListener('loopComplete', () => { console.log("This is firing") });

        
    }, [])
    return (
        <>
            <AnimationBlock id = "lesson1_intro"/>
        </>
    )
}

export default Animation