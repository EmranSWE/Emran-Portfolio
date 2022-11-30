import React from 'react';
import { Link } from 'react-router-dom';
import ChangeThemes from '../ChangeTheme/ChangeThemes';
import logo from '../../Assets/favicon.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from './Loading';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
   
      if(loading){
        return <Loading></Loading>
      }
      if(error){
        return toast.error('Failed to sign in')
      }
      const logout = () => {
        signOut(auth);
      };
     
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                    <li><Link to='/projects'>Project</Link></li>
                    <li><Link to='/resume'>Resume</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    {user ? <li><Link to='/signOut'  onClick={logout}>Sign Out</Link></li>: <li><Link to='/login'>Login</Link></li> }
                    {
                         user?.email ==="mdemran.swe@gmail.com"
                         && <> <li><Link to='/addproject'>Add Project</Link></li>
                         <li><Link to='/addproject'>Add Project</Link></li>
                    <li><Link to='/message'>message</Link></li></>
                   }

                   
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <Link to='/'><img src={logo} className='w-22' alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/projects'>Project</Link></li>
                    <li><Link to='/resume'>Resume</Link></li>
                   
                   {
                         user?.email ==="mdemran.swe@gmail.com"
                         && <> <li><Link to='/addproject'>Add Project</Link></li>
                    <li><Link to='/message'>message</Link></li></>
                   }
                    <li><Link to='/blogs'>Blogs</Link></li>

                    {user ? <li><Link to='/signout'  onClick={logout}>Sign Out</Link></li>: <li><Link to='/login'>Login</Link></li> }
                    
                </ul>
            </div>
            <div className="navbar-end">
            <ChangeThemes></ChangeThemes>
            </div>
        </div>
    );
};

export default Navbar;