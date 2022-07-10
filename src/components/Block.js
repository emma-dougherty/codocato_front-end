import React from "react"
import styled from "styled-components"

const Box = styled.div`
background-color: green;
height: 8vh;
width: 8vh;
`

const Block = () => {

    return(
        <>
            <Box><p>THIS IS A BOX</p></Box>
        </>
    )
}

export default Block