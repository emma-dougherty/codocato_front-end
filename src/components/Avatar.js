import React, { useEffect } from "react"
import lottie from "lottie-web"
import codocato_avatar1 from "../assets/codocato-avatar1a.json"
import codocato_avatar2 from "../assets/codocato-avatar2a.json"
import codocato_avatar3 from "../assets/codocato-avatar3a.json"

const Avatar = ({ avatar }) => {

    let id = "animation"
    useEffect(() => {
        if (avatar === "avatar1") {
            id += "1"
            lottie.loadAnimation({
                container: document.querySelector("#" + id),
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
    }, [])
    return (
        <>
        </>
    )
}

export default Avatar