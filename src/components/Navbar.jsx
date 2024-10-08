import NavLogo from '../assets/bk-logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <nav className='flex place-items-center justify-center text-center text-lg fixed text-zinc-50 space-x-5 p-7 w-[100vw] font-bold bg-[#f8a8288f]'>
                <div id="NavLogo" className="flex flex-row w-[5rem] h-[2rem]">
                    <img src={NavLogo} alt="img" />

                </div>
                <a href="#">Home</a>
                <a href="#">Add Book</a>
                <Link>Account</Link>
            </nav>

        </div>
    )
}

export default Navbar