import Footer from "../../components/footer"
import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom";
import React from "react";
import { FaUserLock } from "react-icons/fa";


const Login = () => {
    return (


        <div id="signup-container">
            <div className="w-[50rem] h-full pt-20 pb-20">

                <div className="w-[50rem] items-center justify-center mx-28">
                    <form method="post" className="p-40 text-left bg-white/20">
                        <div>
                            <div className="flex-col text-white p-10 text-center">
                                <h1 className="font-bold text-3xl font-sans ">WELCOME BACK!</h1>
                            </div>
                        
                            <div className="flex items-center justify-center">
                                <hr className="w-[35%] flex" /><h2 className="flex text-lg p-10 text-white font-bold">LOGIN</h2><hr className="w-[35%] flex" />
                            </div>
                        </div>
                        <label className="text-white" htmlFor="email">Email</label>
                        <input type="text" className="p-[1rem] w-[30rem] mb-[40px]" placeholder="Enter Email" required />
                        <label className="text-white" htmlFor="password">Password</label>
                        <input type="password" className="p-[1rem] w-[30rem] mb-[40px]" placeholder="Enter Password" required />
                        <Link to='/add-new'><button className="bg-[#f8a8288f] text-white p-[10px] mr-5 hover:te">Login</button></Link>
                        <Link to='/'><button className="bg-[#f8a8288f] text-white p-[10px]">Go back</button></Link>
                        <div className="text-xl text-white">
                            <hr className="w-full mt-10" />
                            <p>Don't have an Account? <span className="text-amber-400"><Link to='/account'>Register Now</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;