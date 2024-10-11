
// import Navbar from "../../components/Navbar"
import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import React from 'react';
import { Link } from "react-router-dom";




//signup form starts here
const signup = () => {
    return (
        <div id="signup-container">
            <div className="w-[50rem] h-full pt-20 pb-20 ">
                <div className="w-[50rem] items-center justify-center mx-28">
                    <form method="post" className="p-40 text-left bg-orange-300/30">
                        <div>

                            <div className="flex-col text-white p-2 text-center">
                                <h1 className="font-bold text-4xl font-sans ">Register for Unlimited Resources</h1>
                                <div className="flex items-center justify-center pt-10">
                                    <hr className="w-44 flex" /><h3 className=" text-white p-5 flex">Fill Details</h3><hr className="w-44 flex" />
                                </div>
                            </div>

                        </div>
                        <label className="text-white" htmlFor="Signup">Full Name</label>
                        <input type="text" className="p-[1rem] w-[30rem] mb-[40px]" placeholder="First Name" required />
                        <input type="text" className="p-[1rem] w-[30rem] mb-[40px]" placeholder="Last Name" required />
                        <label className="text-white" htmlFor="Signup">Email</label>
                        <input type="email" className="p-[1rem] w-[30rem] mb-[40px]" placeholder="Enter Email Address" required />
                        <label className="text-white" htmlFor="Signup">Password</label>
                        <input type="password" className="p-[1rem] w-[30rem] mb-[40px]" placeholder="Enter Password" required />
                        <Link to='/add-new'><button className="bg-[#f8a8288f] text-white p-[10px] mr-5">Register</button></Link>
                        <Link to='/'><button className="bg-[#f8a8288f] text-white p-[10px]">Go back</button></Link>
                        <hr className="w-full mt-10" />
                        <div className="text-xl text-white">
                            <p>Have an Account already? <span className="text-amber-400"><Link to='/Login'>Login</Link></span></p>
                        </div>

                        <p className="flex gap-x-4 mt-10 p-4 size-10">
                            <FaFacebookF className="p-4 text-white" />
                            <FaInstagram className="text-white " />
                            <FaLinkedinIn /></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default signup;