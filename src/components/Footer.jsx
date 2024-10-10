import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";




const Footer = () => {
  return (
    <div className=" mt-[200px] flex flex-col  w-[100%] h-[120px] bg-black text-white justify-center align-center">
      <div className=" flex justify-between w-[80%] m-auto items-center">
      <p>Subscribe Newsletter</p>
      <form className=" rounded-full  border-[#ffffffc4] border-2 items-center">
        <input className="w-[250px] h-[40px] rounded-bl-full rounded-tl-full pl-7  bg-black text-white " type="text" placeholder="Enter Email" />
        <button className="bg-[#f8a8288f] h-[40px] px-6 rounded-br-full rounded-tr-full hover:bg-white hover:text-black">Send</button>
      </form>
       

      <h2>Follow Us</h2>
      <p className="flex gap-x-4">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn /></p>

        </div>
        <div>
        <h1 className="flex justify-center items-center gap-x-2">Copyright ©2024 All rights reserved  This template is made with <GiEternalLove />by Rundevs</h1>

        </div>
    </div>
    



  )
}


export default Footer