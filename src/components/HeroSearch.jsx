const HeroSearch = () => {
  return (
    <div className="form flex bg-red-950 w-3/5 p-10 bg-inherit" >

      <form className="p-10">
        <input className="p-5 flex w-96 rounded-3xl" placeholder="Search for books" />
      </form>
      <button className="bg-red-950 p-5 w-40 text-white font-bold">Send</button> 
    </div>

    
  )
}

export default HeroSearch