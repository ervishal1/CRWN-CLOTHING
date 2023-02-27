import React from 'react'
import {signInWithGooglePopUp, createUserDocFromAuth} from '../../../utils/firebase.utils';


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        createUserDocFromAuth(user);
    }

  return (
    <div>
        <h1>Sign in Page</h1>
        <button onClick={logGoogleUser}>Sign in With Google Popup</button>
    </div>
  )
}

export default SignIn