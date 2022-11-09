import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from './Loading';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    if (error) {
        return (
          toast.error(error)  
        );
      }
      if (loading) {
        return <Loading></Loading>
      }
      if(user){
          navigate('/home')
      }
    return (
        <div>
            <div className="flex flex-col w-48 mx-auto border-opacity-50">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center"><button onClick={() => signInWithGoogle()}>Google Sign In</button></div>               
            </div>
        </div>
    );
};

export default Login;