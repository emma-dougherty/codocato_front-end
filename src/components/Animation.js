import React, { useEffect } from "react"
import lottie from "lottie-web"
import lesson1_intro from "../assets/lesson1_intro.json"
import game1_intro from "../assets/game1_intro.json"
import game1_outro from "../assets/game1_outro.json"
import app_intro from "../assets/codocato-titles.json"
import styled from "styled-components"

const AnimationBlock = styled.div`
width: 100vw;
${'' /* height: 100vh; */}
${'' /* padding-top: 10vh; */}
`

const Animation = ({ appState }) => {

    // had to add logic below because lottie loads require a direct import


    useEffect(() => {
        if (appState == "AnimationContainer") {
            lottie.loadAnimation({
                container: document.querySelector("#animation"),
                animationData: lesson1_intro,
                renderer: "svg", // "canvas", "html"
                loop: false, // boolean
                autoplay: true, // boolean
            })
        } else if (appState == "GameAnimationContainer") {
            {
                lottie.loadAnimation({
                    container: document.querySelector("#animation"),
                    animationData: game1_intro,
                    renderer: "svg", // "canvas", "html"
                    loop: false, // boolean
                    autoplay: true, // boolean
                })
            }
        } else if (appState == "GameWinAnimationContainer") {
            {
                lottie.loadAnimation({
                    container: document.querySelector("#animation"),
                    animationData: game1_outro,
                    renderer: "svg", // "canvas", "html"
                    loop: false, // boolean
                    autoplay: true, // boolean
                })
            }
        } else if (appState == "IntroAnimationContainer") {
            {
                lottie.loadAnimation({
                    container: document.querySelector("#animation"),
                    animationData: app_intro,
                    renderer: "svg", // "canvas", "html"
                    loop: false, // boolean
                    autoplay: true, // boolean
                })
            }
        }


    }, [])
    return (
        <>
            <AnimationBlock id="animation" />
        </>
    )
}

export default Animation