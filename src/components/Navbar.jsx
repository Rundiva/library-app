import HeroImg from '../assets/pic3.jpg'
const Navbar = () => {
    return (
        <div>
            <nav className='text-center text-lg fixed text-zinc-50 space-x-5 p-10 w-[100vw] font-bold'>
                <a href="#">Home</a>
                <a href="#">Books</a>
                <a href="#">Authors</a>
            </nav> 
            <div className='overlay'><img className='bg-cover' src={HeroImg} alt="img" /></div>
        </div>
    )
}

export default Navbar