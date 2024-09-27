import React, {useEffect, useState} from "react";
import { Redirect } from "react-router";
import "./LogoScreen.css";
 
const LogoScreen = () => {

    const [reroute, setReroute] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setReroute(true);
        }, 3000)
    }, []); 
    
    return(
        <div>
            <div class="word">
                <h1>MOVIEVERSE</h1>
            </div>
            {reroute && <Redirect to="/browse"/>}
        </div>
    )
};

export default LogoScreen;
