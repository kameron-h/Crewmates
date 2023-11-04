import React, { useEffect } from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import pink_crewmate from './crewmates/pink_crewmate.png'
import red_crewmate from './crewmates/red_crewmate.png'
import orange_crewmate from './crewmates/orange_crewmate.png'
import yellow_crewmate from './crewmates/yellow_crewmate.png'
import green_crewmate from './crewmates/green_crewmate.png'
import blue_crewmate from './crewmates/blue_crewmate.png'
import purple_crewmate from './crewmates/purple_crewmate.png'
import black_crewmate from './crewmates/black_crewmate.png'
import white_crewmate from './crewmates/white_crewmate.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [source, setSource] = useState("")
  
  useEffect(() => {
    const crewmateColor = () => {
      switch (props.color) {
        case "Pink":
          setSource(pink_crewmate);
          break;
        case "Red":
          setSource(red_crewmate);
          break;
        case "Orange":
          setSource(orange_crewmate);
          break;
        case "Yellow":
          setSource(yellow_crewmate);
          break;
        case "Green":
          setSource(green_crewmate);
          break;
        case "Blue":
          setSource(blue_crewmate);
          break;
        case "Purple":
          setSource(purple_crewmate);
          break;
        case "White":
          setSource(white_crewmate);
          break;
        case "Black":
          setSource(black_crewmate);
          break;
        default:
          setSource("");
      }
    }

    crewmateColor();
  }, [])

  return (
    <>
    
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <Link to={'crewmate/' + props.id}>
            <img className='crewmate' alt='' src={source}></img>
            <h1 className="name">Name: {props.name}</h1>
            <h3 className="color">Color: {props.color}</h3>
            <h3 className="gender">Gender: {props.gender}</h3>
            <h3 className='age'>Age: {props.age}</h3>
          </Link>
      </div>
    </>
    
    
  );
};

export default Card;