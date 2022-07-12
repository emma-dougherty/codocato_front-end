import React, {useState} from "react"
import codocato_avatar1 from "../assets/codocato-avatar1.svg"
import codocato_avatar2 from "../assets/codocato-avatar2.svg"
import codocato_avatar3 from "../assets/codocato-avatar3.svg"
import { PostPlayer } from "../services/Services"
import styled from 'styled-components';


const NewProfileColumn = styled.div`
display: flex;
flex-direction: column;
padding: 8vh;
margin: auto;
tex-align:center;
`

const CreateButtonStyled = styled.input`
background-color: #FF6666;
border-radius: 100%;
padding: 2vh;
border:0px;
justify-content: center;
cursor:pointer;
margin: 2vh;
font-family: 'Fresh-Steak';
color:#BEDEF4;
font-size:3vh;
&:hover{
    background-color: #FCE74A;
}
`

const InputTextBoxStyled = styled.input`
border-radius: 1vh;
border-width: 1vh;
border-color:#38B6FF;
margin:3vh;
width:30vh;
height:5vh;
font-family: 'Fresh-Steak';
font-size:3vh;
`

const AvatarRadioStyled = styled.input`
 position: absolute;
  opacity: 0;
  `

const AvatarImageSelectorStyled = styled.img`
cursor:pointer;
margin: 2vh;
`

const ChooseAvatarLabelStyled = styled.label`
    font-weight: bold;
    font-size: 3.5vh;
    color: #FCE74A;
    margin:3vh;
    
`

const CreateProfileTitleStyled = styled.h2`
color: #FCE74A;
font-weight: bold;
font-size: 5vh;
`

const RadioButtonsContainerStyled = styled.div`
justify-content: space-between;
display:flex;
flex-direction:row;

`

const NewProfileForm = ({addNewProfile}) => {

    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleAvatarChange = (event) => {
        setAvatar(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProfile = {
            "name" : name,
            "avatar" : avatar
        }
        addNewProfile(newProfile)
        setName("")
        setAvatar("")
        event.target.reset()
    }

    return (
        <NewProfileColumn>

            <CreateProfileTitleStyled>CREATE A NEW PROFILE</CreateProfileTitleStyled>
            <form onSubmit = {handleSubmit}>

            
                <InputTextBoxStyled type = "text" placeholder = "your name" onChange = {handleNameChange} required />

                <div>

                    <ChooseAvatarLabelStyled>Choose Your Codocato!</ChooseAvatarLabelStyled><br/>

                    <RadioButtonsContainerStyled>
                        <label>
                            <AvatarRadioStyled type="radio" name="avatar" value="codocato-avatar1.svg" onChange={handleAvatarChange} />
                            <AvatarImageSelectorStyled src={codocato_avatar1} height="70" width="70" />
                        </label>

                        <label>
                            <AvatarRadioStyled type="radio" name="avatar" value="codocato-avatar2.svg" onChange={handleAvatarChange} />
                            <AvatarImageSelectorStyled src={codocato_avatar2} height="70" width="70" />
                        </label>

                        <label>
                            <AvatarRadioStyled type="radio" name="avatar" value="codocato-avatar3.svg" onChange={handleAvatarChange} />
                            <AvatarImageSelectorStyled src={codocato_avatar3} height="70" width="70" />
                        </label>
                    </RadioButtonsContainerStyled>
                </div>

                <CreateButtonStyled type="submit" value="CREATE" />
            </form>
        </NewProfileColumn>
    )
}

export default NewProfileForm;