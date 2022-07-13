import React, { useEffect, useState } from "react"
import lottie from "lottie-web"
import codocato_avatar1 from "../assets/codocato_avatar1.json"
import codocato_avatar2 from "../assets/codocato_avatar2.json"
import codocato_avatar3 from "../assets/codocato_avatar3.json"
import styled from "styled-components"



const Avatar = ({avatar}) => {

    let id = "animation"
    useEffect(() => {
        if (avatar === "avatar1") {
            id += "1"
            lottie.loadAnimation({
                container: document.querySelector("#"+ id),
                animationData: codocato_avatar1,
                renderer: "svg", // "canvas", "html"
                loop: true, // boolean
                autoplay: true, // boolean
            })
    } else if (avatar === "avatar2") {
            id += "2"
            lottie.loadAnimation({
                container: document.querySelector("#" + id),
                animationData: codocato_avatar2,
                renderer: "svg", // "canvas", "html"
                loop: true, // boolean
                autoplay: true, // boolean
            })
    } else if (avatar === "avatar3") {
            id += "3"
            lottie.loadAnimation({
                container: document.querySelector("#" + id),
                animationData: codocato_avatar3,
                renderer: "svg", // "canvas", "html"
                loop: true, // boolean
                autoplay: true, // boolean
            })
    }
},[])
return (
    <>
    </>
)
}

export default Avatar