import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import { Toolbar} from '@material-ui/core';


function UserProfile()
{


    const styleImg = {
        borderRadius:"8px",
        borderRadius: "81px",
    width: "53px"
        };


        const styleText={
            fontSize:"7px",
        }
const{ user , isAuthenticated ,isLoading }=useAuth0();

if(isLoading){
    return <div>Loading!!!</div>
}
return(
   isAuthenticated &&(
<div>
 
 <Toolbar>

    <img style={styleImg} src={user.picture}/>
    <div style={styleText}>

    <h2>{user.name}</h2>
    <p>{user.email}</p>
    </div>

 </Toolbar>
</div>

   )
)

};

export default UserProfile;