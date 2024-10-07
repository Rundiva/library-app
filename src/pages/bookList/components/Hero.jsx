import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div>


      <section id="hero-section" className='w-[100vw] h-[100vh]'>
        <div id='hero-overlay' className="w-[100%] h-[100%] bg-[#00000075]">
          <div id="hero-container" className="w-[80%] h-[100%] mx-auto flex justify-center items-center">
            <div id="hero-des" className="flex flex-col items-center justify-center gap-y-[40px] mt-[50rem] mb-[40rem]">
              <h1 className="text-white text-[80px] font-bold pt-[15rem]">RUNDEVS OPEN LIBRARY</h1>
              <p className="text-white text-[22px]">GET UNLIMITED ACCESS ALL THE INTERESTING BOOKS YOU NEED</p>
              <span className="flex gap-x-2">
                <button className="py-[16px] px-[24px] bg-[#F8A928] text-white border-[3px]  hover:bg-white hover:text-black hover:border-black border-[#F8A928]">OUR COLLECTIONS</button>
                <button className="py-[16px] px-[24px] bg-[#c5a88000] text-white border-[2px] hover:bg-white hover:text-black">ADD BOOK</button>
                <Link to="/add-new">Add</Link>
              </span>
              <div id="searchBar" className="flex bg-[#F8A928] box-content-h-[30rem] w-[62rem] p-24 mt-[15rem] mb-[5rem] ">
              
                <input className="flex w-[35rem] h-[3rem] p-[2rem] rounded-l-full justify-center" placeholder="search books" /><button className="flex bg-black w-[8rem] text-white justify-center items-center">Find</button>




              </div>

            </div>
          </div>

        </div>


      </section>

    </div>
  )
}

export default Hero