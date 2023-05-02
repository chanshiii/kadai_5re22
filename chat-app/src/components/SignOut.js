import { Button } from '@mui/material';
import {auth} from "../firebase.js";
import React from 'react';
import { CallToAction } from '@mui/icons-material/';

function SignOut() {
  return (
    <div className="header">
        <Button 
        style={{color : "white", fontSize: "15px" }}
        onClick={() => auth.SignOut()}
        >
         サインアウト
         </Button>
         <h3>{auth.currentUser.displayName}</h3>
         <CallToAction />
    </div>
  );
}

export default SignOut;