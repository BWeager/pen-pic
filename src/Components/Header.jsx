import { Link } from 'react'
import '../index.css';
import ProfileImage from "../Images/Profile Image.jpg"
import SlackIcon from "../Images/Slack_icon.png"
import OutlookIcon from "../Images/Outlook_icon.png"
import LinkedInIcon from "../Images/LinkedIn Logo.png"

export default function Header() {
    return(
        <>
            <div id="header">
                    <img className="profileimg" src={ProfileImage} alt="Profile Image"/>
                    <h1 className="h1">Ben Weager</h1>
            </div>  
            <div id="iconsbanner">
                    <img src={SlackIcon} alt="Slack Icon"/>
                    <a href="https://ibm.slack.com/team/U05DQBTR15Y" className="p1">@ben.weager</a>
                    <img src={LinkedInIcon} alt="LinkedIn Icon"/>
                    <a href="https://www.linkedin.com/in/ben-weager/" className="p1">ben-weager</a>
                    <img src={OutlookIcon} alt="Outlook Icon"/>
                    <a href="mailto:ben.weager@ibm.com" className="p2">ben.weager@ibm.com</a>
            </div>
        </>   
    )
}