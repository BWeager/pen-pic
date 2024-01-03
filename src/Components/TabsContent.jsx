import "../index.css"
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
                <p className="ReactJSText1">Essentials</p>
                <div className="ReactJSProgessBarBackground">
                   <div className="ReactJSProgessBarEssentials">
                        <p className="ReactJSText2">100%</p>
                   </div>
                </div>
                <p className="ReactJSText1">Additional Modules</p>
                <div className="ReactJSProgessBarBackground">
                   <div className="ReactJSProgessBarAdditional">
                        <p className="ReactJSText2">0%</p>
                   </div>
                </div>
            </div>    
        </div>
        <div className="AlignHorizontal1">
            <p className="ModuleBold">Current Module:</p>
            <p className="Module1">Styling React Components</p>
        </div>
        <div className="ModuleBold">
            <p>Completed Modules:</p>
        </div>
        <div className="AlignHorizontal2">
            <p className="Module2">Getting Started</p>
            <p className="Module2">Javascript Refresher</p>
            <p className="Module2">React Essentials - Components, JSX, Props, State & More</p>
            <p className="Module2">React Essentials - Deep Dive</p>
            <p className="Module2">React Essentials - Practice Project</p>
        </div>

    </div>

    ,

    /* Content for the "IBM training" section */

    <div id="menucontent1">
        <div className="IBMtraining">
            <a href="https://yourlearning.ibm.com/credential/CREDLY-68bd59ef-625c-497c-afd2-9e17ddc0cdc4"><img
            src={AgileExplorerImg} alt="Agile Explorer"/></a>
            <a href="https://yourlearning.ibm.com/credential/CREDLY-677b7701-85b8-445d-8a8c-cd28a8433cf5"><img
            src={BeEqualImg} alt="Be Equal Ally"/></a>
            <a href="https://yourlearning.ibm.com/credential/CREDLY-c4442c43-d990-4274-bd04-901ea30448ba"><img
            src={ConsultingWayImg} alt="Consulting Way"/></a>
            <a href="https://yourlearning.ibm.com/credential/CREDLY-5ff04782-b71d-4485-aebc-57183f1817bd"><img
            src={QuantumConversationsImg} alt="Quantum Conversations"/></a>
            <a href="https://yourlearning.ibm.com/credential/CREDLY-67ad391f-1fe1-469e-aaa8-a709e61b8cc0"><img
            src={ThinkLikeHackerImg} alt="Think Like a Hacker Credential"/></a>
            <a href="https://yourlearning.ibm.com/credential/CREDLY-a359c94b-c069-4274-9e05-498560b387b3"><img
            src={TrustworthyAIImg} alt="Trustworthy AI Credential"/></a>
        </div>
    </div>
];

export default tabsContent
