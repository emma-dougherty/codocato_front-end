import React, { useEffect } from "react"
import lottie from "lottie-web"
import app_intro from "../assets/codocato-titles.json"
import styled from "styled-components"

const AnimationBlock = styled.div`
height: 100vh;

`

const Animation = () => {

    useEffect(() => {

        lottie.loadAnimation({
            container: document.querySelector("#animation"),
            animationData: app_intro,
            renderer: "svg", // "canvas", "html"
            loop: false, // boolean
            autoplay: true, // boolean
        })
    }, [])
    return (
        <>
            <AnimationBlock id="animation" />
        </>
    )
}

export default Animation