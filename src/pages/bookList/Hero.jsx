import { Link } from "react-router-dom"
import BookList from "./BookList"
import Footer from "../../components/Footer"


const Hero = () => {
  return (
    <div>


      <section id="hero-section" className='w-[100vw] h-[130vh]'>
        <div id='hero-overlay' className="w-[100%] h-[100%] bg-[#00000075]">
          <div id="hero-container" className="w-[80%] h-[100%] mx-auto flex justify-center items-center">
            <div id="hero-des" className="flex flex-col items-center justify-center gap-y-[40px] mt-[50rem] mb-[40rem]">
              <h1 className="text-white text-[80px] font-bold pt-[20rem]">RUNDEVS OPEN LIBRARY</h1>
              <p className="text-white text-[22px]">GET UNLIMITED ACCESS ALL THE INTERESTING BOOKS YOU NEED</p>
              <span className="flex gap-x-2">
                <button id="booklist" className="py-[16px] px-[24px] bg-[#F8A928] text-white border-[3px]  hover:bg-white hover:text-black hover:border-black border-[#F8A928]">OUR COLLECTIONS</button>
                <Link to="/add-new" className="py-[16px] px-[24px] bg-[#c5a88000] text-white border-[2px] hover:bg-white hover:text-black">ADD BOOK</Link>

              </span>
              <div id="searchBar" className="flex bg-[#F8A928] box-content-h-[30rem] w-[100vw] p-24 mt-[15rem] mb-[5rem] ">

                <input className="flex w-[35rem] h-[3rem] p-[2rem] rounded-l-full justify-center" placeholder="search books" /><button className="flex bg-[#F8A928] w-[8rem] text-white justify-center items-center">Find</button>


               
              </div>

            </div>
          </div>

        </div>


      </section>

      <div id="#booklist" className="mt-[300px]">
                 <BookList/>
                 <Footer/>
                </div>


    </div>
  )
}

export default Hero