import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './ReadEntry.css'

const ReadEntry= (props) => {

    const [posts, setPosts] = useState([]);
    const [source, setSource] = useState("")

    useEffect(() => {
        setPosts(props.data);
        
    }, [props]);
    
    return (
        <div className="ReadEntry">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card 
                        key={post.id}
                        id={post.id} 
                        name={post.name} 
                        color={post.color} 
                        gender={post.gender} 
                        age={post.age}
                    />
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadEntry;