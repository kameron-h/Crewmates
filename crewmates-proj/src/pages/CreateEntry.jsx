import React, { useState } from 'react';
import './CreateEntry.css'
import { supabase } from '../client.js'

const CreateEntry = () => {
    const [post, setPost] = useState({name : "", 
                                    color: "", 
                                    gender: "", 
                                    age: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrewmate = async(event) => {
        event.preventDefault();

        const { error } = await supabase
        .from('Crewmates')
        .insert({name : post.name, 
                color: post.color, 
                gender: post.gender, 
                age: post.age})
        .select();

        if (error) console.log(error);
    
        window.location = "/";
    }

    return (
        <div>
            <form onSubmit={createCrewmate}>
                <span><label htmlFor="name">Name:</label> <br /></span>
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange}/><br />
                <br/>

                <span><label htmlFor="color">Color:</label><br /></span>
                <input type="radio" id="color" name="color" value="Pink" onClick={handleChange}/>
                <label htmlFor="color">Pink</label><br/>
                <input type="radio" id="color" name="color" value="Red" onClick={handleChange}/>
                <label htmlFor="color">Red</label><br/>
                <input type="radio" id="color" name="color" value="Orange" onClick={handleChange}/>
                <label htmlFor="color">Orange</label><br/>
                <input type="radio" id="color" name="color" value="Yellow" onClick={handleChange}/>
                <label htmlFor="color">Yellow</label><br/>
                <input type="radio" id="color" name="color" value="Green" onClick={handleChange}/>
                <label htmlFor="color">Green</label><br/>
                <input type="radio" id="color" name="color" value="Blue" onClick={handleChange}/>
                <label htmlFor="color">Blue</label><br/>
                <input type="radio" id="color" name="color" value="Purple" onClick={handleChange}/>
                <label htmlFor="color">Purple</label><br/>
                <input type="radio" id="color" name="color" value="White" onClick={handleChange}/>
                <label htmlFor="color">White</label><br/>
                <input type="radio" id="color" name="color" value="Black" onClick={handleChange}/>
                <label htmlFor="color">Black</label><br/>
                <br></br>
                

                <span><label htmlFor="gender">Gender:</label> <br /></span>
                <input type="text" id="gender" name="gender" value={post.gender} onChange={handleChange}/><br />
                <br/>

                <span><label htmlFor="age">Age:</label><br /></span>
                <input type="text" id="age" name="age" value={post.age} onChange={handleChange}/><br />
                <br/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default CreateEntry