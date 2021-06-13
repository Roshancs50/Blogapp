import React, { useContext} from 'react';
import { UserContext } from '../../contexts/user';
import { signInWithGoogle } from '../../services/auth';
import "./style.css";
export default function SignInBtn(){

const [,setUser]=useContext(UserContext).user;

const signInBtnClick= async ()=>{
let userBySignIn=await signInWithGoogle();
  if (userBySignIn) setUser(userBySignIn);
};
   
   
   return <div className="signinbtn" onClick={signInBtnClick}>
        <p>Sign in with Google</p>
    </div>;
}