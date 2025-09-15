const BookBite = () => {
    return (
      <div className="bg-[#D9D9D9] md:w-[60vw] md:min-w-[31rem] md:min-h-[20rem] cu:w-[40vw] cu:min-w-[41rem] cu:min-h-[23rem] pb-[1vw] relative top-[25vh] left-[2vw] shadow-md z-30 cu:pr-6">
          <h1 className="BookBite text-[#828D72] relative left-[2vw] pxl cu:text-[4.8vw] md:text-[6vw] tracking-wider ">BookBite</h1>
          <div className="flex gap-[2vw]">
            <div className="data cu:w-[60%] md:w-[70%] relative left-[2vw] flex flex-col items-center justify-center font-mono text-[clamp(30rem, 5vw, 50rem)]">
              <p>We've all been there, driving across the city only to find your favorite restaurant packed, or waiting 30 minutes for food that could've been ready when you arrived. BookBite eliminates these everyday frustrations by bringing convenience to your fingertips.<br />
              <br />
              <a href="" className="text-left text-[#6a9b20]">Contact</a> us for more info.</p>
            </div>
          <div className="logo shadow-xl bg-[#8DA67B] relative left-[2vw] md:top-[0.6vw] lg:mr-[2vw] cu:top-[0vw]" style={{ width: "clamp(12vw, 12vw, 14vw)", height: "clamp(12vw, 12vw, 14vw)" }}>
            <img src="/bookbite.png" alt="" style={{ width: "clamp(12vw, 12vw, 14vw)", height: "clamp(12vw, 12vw, 14vw)" }} />
          </div>
          </div>
      </div>
    )
  }
  
  export default BookBite