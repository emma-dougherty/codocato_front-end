import React, {useEffect} from "react";
import styled from "styled-components"
import Animation from "../components/Animation"

const LContainer = styled.div`
    ${'' /* background-image: ${props => `url(${props.bgimage})`}; */}
    background-size: cover;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    background-color:#368DCE;
    `

const IntroAnimationContainer = ({setAppState, appState}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setAppState("ProfileContainer")
        }, 5000)
        return () => clearTimeout(timer);
        
    }, [])

    return(
<>
        <LContainer bgimage = {`http://localhost:8080/animation/codocato-titles.json}`}>
            <Animation setAppState = {setAppState} appState = {appState}/>
        </LContainer>
        </>
    )
}

export default IntroAnimationContainer