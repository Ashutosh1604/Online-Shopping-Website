import React from 'react';
import {useAuth0} from "@auth0/auth0-react";


function LogoutButton({handleEmptyCart})
{

    const mystyle = {
      color: "whiteSmoke",
      backgroundColor: "#d46a6a",
      borderRadius:"8px",
      width: "61px",
      height: "35px",
      cursor:"pointer"
      };

      
const{ logout }=useAuth0();

return(
    <button style={mystyle} onClick={() =>{ logout({return: window.location.origin}); handleEmptyCart();}}>Log out</button>
)

};

export default LogoutButton;