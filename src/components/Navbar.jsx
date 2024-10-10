import NavLogo from '../assets/bk-logo.png'
import { Link } from 'react-router-dom'  
import { FaUserLock } from "react-icons/fa";


const Navbar = () => {
    return (
        <div>

            <nav className='flex place-items-center justify-center text-center text-lg fixed text-zinc-50 space-x-10 p-7 w-[100vw] font-bold bg-[#f8a8288f]'>
                <div id="NavLogo" className="flex flex-row w-[5rem] h-[2rem]">
                    <img src={NavLogo} alt="img" />

                </div>
                <Link to='/'><a href="#">Home</a></Link>
                <a href="#">Add Book</a>
                <Link to='/account'>Account</Link> 
                <FaUserLock />
            </nav>

        </div>
    )
}

export default Navbar