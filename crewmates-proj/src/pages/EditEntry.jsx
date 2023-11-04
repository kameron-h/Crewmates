import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditEntry.css'
import { supabase } from '../client.js'

const EditEntry = ({data}) => {
    const [newPost, setNewPost] = useState({name : "", 
                                            color: "", 
                                            gender: "", 
                                            age: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewPost((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const {id} = useParams();

    const updateEntry = async(event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .update({name : newPost.name, 
                    color: newPost.color, 
                    gender: newPost.gender, 
                    age: newPost.age})
            .eq('id', id);

        window.location = "/";
    }

    const deleteEntry = async(event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .delete()
            .eq('id', id);

        window.location = "/";
    }

    return (
        <div>
            <form onSubmit={updateEntry}>
                <span><label htmlFor="name">Name:</label> <br /></span>
                <input type="text" id="name" name="name" value={newPost.name} onChange={handleChange}/><br />
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

                <span><label htmlFor="gender">Gender</label> <br /></span>
                <input type="text" id="gender" name="gender" value={newPost.gender} onChange={handleChange}/><br />
                <br/>

                <span><label htmlFor="age">Age</label><br /></span>
                <input type="text" id="age" name="age" value={newPost.age} onChange={handleChange}/><br />
                <br/>

                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deleteEntry}>Delete</button>
            </form>
        </div>
    )
}

export default EditEntry

