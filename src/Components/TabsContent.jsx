import "../index.css"
import { modules } from './Modules.jsx'
import LoucollImg from "../Images/Loucoll_Image.jpg"
import BudapestImg from "../Images/Budapest_Image.png"
import RussiaImg from "../Images/Russia_Image.jpg"
import AgileExplorerImg from "../Images/AgileExplorer_Img.png"
import BeEqualImg from "../Images/BeEqual_Img.png"
import ConsultingWayImg from "../Images/ConsultingWay_Img.png"
import QuantumConversationsImg from "../Images/QuantumConversations_Img.png"
import ThinkLikeHackerImg from "../Images/ThinkLikeHacker_Img.png"
import TrustworthyAIImg from "../Images/TrustworthyAI_Img.png"
import ReactJSImg from "../Images/ReactJS_IMG.jpg"

const tabsContent = [ 
    /* Content for the "About me" section */
    <div id="menucontent1">
    
        <p>
            I am a UK National. I grew up in the UK until I was 12
            and then lived in a few countries across Europe including
            Hungary and Russia. At 18, I returned to the UK and I am 
            studying a BSc in Economics at Loughborough University. <br />
            <br />

            My hobbies include: exercise (mostly running and weight training),
            gaming and reading.<br />
            <br />
            
            While at University, I also have a role as an 
            Esports (competitive video game) coach at Loughborough College. 
            I work with students who are taking their BTEC qualitifications as 
            an afterschool Esports coach. This includes organising training 
            sessions, reviewing matches and just about anything that a traditional
            sports coach does. The players then compete in a league against other 
            colleges. 
        </p>

        <div className="aboutmecolumn">
            <img
            src={LoucollImg} alt="Esports Training Facility" />
            <img
            src={RussiaImg} alt="Moscow"/>
            <img
            src={BudapestImg} alt="Budapest"/>
        </div>

    </div>
    ,

    /* Content for the "ReactJS training" section */

    <div id="menucontent2">
        <h1>React - The Complete Guide 2024</h1>
        <div className="ReactJSContainer">
            <div className="ReactJS">
                <a href="https://yourlearning.ibm.com/activity/UDEMY-1362070"><img
                src={ReactJSImg} alt="ReactJS Training"/></a>
            </div>
            <div className="ReactJSProgress">
                <p className="ReactJSText1">Progress</p>
                <div className="ReactJSProgessBarBackground">
                   <div className="ReactJSProgessBar">
                        <p className="ReactJSText2">65%</p>
                   </div>
                </div>
            </div>    
        </div>
        <div className="AlignHorizontal1">
            <p className="ModuleBold">Current Module:</p>
            <p className="Module1">{modules.currentModule}</p>
        </div>
        <div className="ModuleBold">
            <p>Completed Modules:</p>
        </div>
        <div className="AlignHorizontal2">
            {modules.completedModules.map(module => <p className="Module2">{module}</p>)}
        </div>

    </div>

    ,

    /* Content for the "IBM training" section */

    <div id="menucontent1">
        <div className="IBMtraining">
            <a href="https://www.credly.com/badges/1128ea17-e2b9-4a9f-8cd0-87b13c4b5d6b/public_url"><img
            src={AgileExplorerImg} alt="Agile Explorer"/></a>
            <a href="https://www.credly.com/badges/07ccdf65-d33f-4255-b5aa-cd1f40febcac/public_url"><img
            src={BeEqualImg} alt="Be Equal Ally"/></a>
            <a href="https://www.credly.com/badges/d990fafb-3d3a-486a-bcf2-d5c8120a010f/public_url"><img
            src={ConsultingWayImg} alt="Consulting Way"/></a>
            <a href="https://www.credly.com/badges/b5c96e3a-077d-4417-8034-a2bf0520799a/public_url"><img
            src={QuantumConversationsImg} alt="Quantum Conversations"/></a>
            <a href="https://www.credly.com/badges/058f1b60-d322-444c-9f30-7440aa43b93c/public_url"><img
            src={ThinkLikeHackerImg} alt="Think Like a Hacker Credential"/></a>
            <a href="https://www.credly.com/badges/3fff12f7-5f04-4f45-99e2-c973d8b1fa9c/public_url"><img
            src={TrustworthyAIImg} alt="Trustworthy AI Credential"/></a>
        </div>
    </div>
];
export default tabsContent
