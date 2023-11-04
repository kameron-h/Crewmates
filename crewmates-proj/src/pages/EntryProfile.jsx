import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { supabase } from '../client.js'
import pink_crewmate from '../components/crewmates/pink_crewmate.png'
import red_crewmate from '../components/crewmates/red_crewmate.png'
import orange_crewmate from '../components/crewmates/orange_crewmate.png'
import yellow_crewmate from '../components/crewmates/yellow_crewmate.png'
import green_crewmate from '../components/crewmates/green_crewmate.png'
import blue_crewmate from '../components/crewmates/blue_crewmate.png'
import purple_crewmate from '../components/crewmates/purple_crewmate.png'
import black_crewmate from '../components/crewmates/black_crewmate.png'
import white_crewmate from '../components/crewmates/white_crewmate.png'
import './EntryProfile.css'

const EntryProfile = ({data}) => {
    const [crewmate, setCrewmate] = useState({name: "", 
                                            color: "", 
                                            gender: "", 
                                            age: ""})
    const [source, setSource] = useState("")
    const [text, setText] = useState("")

    const {id} = useParams();

    useEffect(() => {
        const getCrewmate = async() => {
            const { data, error }  = await supabase
                .from('Crewmates')
                .select()
                .eq('id', id)
                .single()

            if (data) {
                setCrewmate({name: data.name, 
                            color: data.color, 
                            gender: data.gender, 
                            age: data.age})
            } else if (error) {
                console.error;
            }

            const crewmateColor = () => {
                switch (data.color) {
                    case "Pink":
                        setSource(pink_crewmate);
                        setText("The pink crewmate was ranked 8th in popularity out of 18 colors.");
                        break;
                    case "Red":
                        setSource(red_crewmate);
                        setText("The red crewmate was the first to be given an official plush.");
                        break;
                    case "Orange":
                        setSource(orange_crewmate);
                        setText("The orange crewmate is usually used as The Engineer in advertising and promotional material.");
                        break;
                    case "Yellow":
                        setSource(yellow_crewmate);
                        setText("The yellow crewmate's chat icon is used on Admin to anonymize players.");
                        break;
                    case "Green":
                        setSource(green_crewmate);
                        setText("In the wallet seen in the Swipe Card and Enter Id Code tasks, there is a family photo that features the green crewmate with two others.");
                        break;
                    case "Blue":
                        setSource(blue_crewmate);
                        setText("The blue crewmate has only appeared in two promotional images.");
                        break;
                    case "Purple":
                        setSource(purple_crewmate);
                        setText("There was an Among Us-themed animation jam named \"The Purple Impostor\" which was hosted by Newgrounds and judged by the Innersloth team.");
                        break;
                    case "White":
                        setSource(white_crewmate);
                        setText("The white crewmate is featured using a megaphone on the in-game announcements page.");
                        break;
                    case "Black":
                        setSource(black_crewmate);
                        setText("The black crewmate is usually portrayed as The Impostor in official advertising and images.");
                        break;
                    default:
                        setSource("");
                }
            }
            
            crewmateColor();
        }

        getCrewmate();
    }, []);

    return (
        <>
            <div className='profile'>
                <img className='crewmate' alt='' src={source}></img>
                <h1 className="name">Name: {crewmate.name}</h1>
                <h1 className="name">Stats:</h1>
                <h3 className="color">Color: {crewmate.color}</h3>
                <h3 className="gender">Gender: {crewmate.gender}</h3>
                <h3 className='age'>Age: {crewmate.age}</h3>
                <p>Trivia: {text}</p>
            </div>
        </>
    )
}

export default EntryProfile;