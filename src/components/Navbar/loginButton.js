import React from 'react';
import {useAuth0} from "@auth0/auth0-react";



function LoginButton()
{
const{ loginWithRedirect }=useAuth0();

const mystyle = {
    color: "whiteSmoke",
    backgroundColor: "#a8a8b5",
    margin:"0px 5px",
    borderRadius:"8px",
    width: "59px",
    height: "35px",
    cursor:"pointer"
    };

return(
    <button  style={mystyle} onClick={() => loginWithRedirect()}  >Log in</button>
)

};

export default LoginButton;