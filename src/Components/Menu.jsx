import { useState } from "react";
import '../index.css'
import tabsContent from './TabsContent.jsx'


export default function Menu () {
    const Labels = ["About me", "ReactJS training", "IBM training"];
    const [selection, setSelection] = useState(0);
    
    let content = null;
    if (selection === 0) {
        content = tabsContent[0]}

    else if (selection === 1) { 
        content = tabsContent[1]}

    else if (selection === 2) { 
        content = tabsContent[2]}
    
    else {
        content = null }

    return(
        <>
            <menu id="menu">
                <button type="button" 
                onClick={()=>setSelection(0)}
                className={(selection === 0) ? "active" : ""}
                >{Labels[0]}</button>
                
                <button type="button" 
                onClick={()=>setSelection(1)}
                className={(selection === 1) ? "active" : ""}
                >{Labels[1]}</button>

                <button type="button" 
                onClick={()=>setSelection(2)}
                className={(selection === 2) ? "active" : ""}
                >{Labels[2]}</button>
            </menu>
            {content}
        </>
    )
}