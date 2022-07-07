import React, {useState} from "react"
import cat_1 from "../assets/cat_1.png"
import cat_2 from "../assets/cat_2.png"
import cat_3 from "../assets/cat_3.png"


const NewProfileForm = () => {

    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleAvatarChange = (event) => {
        setAvatar(event.target.value);
    }

    // const handleSubmit()

    return (
        <>
            {/* <form onSubmit = {handleSubmit}> */}
            <form>
                <input type = "text" placeholder = "your name" onChange = {handleNameChange} required />

                <label>Choose Your codocato!</label>
                <div>

                <label>
                        <input type="radio" name="avatar" value="cat_1" onChange={handleAvatarChange} />
                        <img src={cat_1} height="70" width="70" />
                    </label>

                    <label>
                        <input type="radio" name="avatar" value="cat_2" onChange={handleAvatarChange} />
                        <img src={cat_2} height="70" width="70" />
                    </label>

                    <label>
                        <input type="radio" name="avatar" value="cat_3" onChange={handleAvatarChange} />
                        <img src={cat_3} height="70" width="70" />
                    </label>
                </div>

                <input type="submit" value="submit" />
            </form>
        </>
    )
}

export default NewProfileForm;