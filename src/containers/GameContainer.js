import React from "react"


const GameContainer = () => {

    return (
        <>

        </>
    )
}

export default GameContainer;

// NONE OF THIS WORKS YET - NEED TO UNDERSTAND DROPPABLE AND HOW TO CONVERT VANILLA JS INTO REACT


// import React from "react"
// import styled from "styled-components"
// import { Droppable } from '@shopify/draggable';
// import Block from "../components/Block";
// import UniqueDropzone from "../services/Droppable";

// const Item = styled.div`
//     height: 100%
// `

// const Dropzone = styled.div`
//     outline: solid 1px; 
//     height: 50px;
// `

// const DropzoneOcc = styled.div`

// `



// const GameContainer = () => {

//     const droppable = new Droppable(document.querySelectorAll('.container'), {
//         draggable: '.item',
//         dropzone: '.dropzone'
//     });

//     droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
//     droppable.on('droppable:returned', () => console.log('droppable:returned'));

//     return (
        <>
            {/* <div className="container">
                <DropzoneOcc className="dropzone draggable-dropzone--occupied"><Item className="item"><Block/></Item></DropzoneOcc>
                <DropzoneOcc className="dropzone draggable-dropzone--occupied"><Item className="item"><Block/></Item></DropzoneOcc>
                <DropzoneOcc className="dropzone draggable-dropzone--occupied"><Item className="item"><Block/></Item></DropzoneOcc>
            </div>

            <div className="container">
                <Dropzone className="dropzone"></Dropzone>
            </div>

            <div className="BlockWrapper BlockWrapper--isDropzone">
            <div></div>
            </div> */}

            {/* <style>
                .item {height: 100%; }
                .dropzone {outline: solid 1px; height: 50px; }
                .draggable-dropzone--occupied {background: lightgreen; }
            </style> */}

            {/* <article className="BlockLayout BlockLayout--typeFlex"> */}
                {/* <div className="BlockWrapper BlockWrapper--isDropzone draggable-dropzone--occupied" data-dropzone="1">
                    <Block/>
                </div> */}
            {/* </article> */}

            {/* <article className="BlockLayout BlockLayout--typeGrid"> */}
                {/* <div className="BlockWrapper BlockWrapper--isDropzone" data-dropzone="1">
                    <Block/>
                </div> */}
            {/* </article> */}

        </>
// 