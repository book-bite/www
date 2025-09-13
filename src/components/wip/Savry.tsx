const Savry = () => {
    return (
      <div className="bg-[#D9D9D9] md:w-[60vw] md:min-w-[31rem] md:min-h-[20rem] cu:w-[40vw] cu:min-w-[41rem] cu:min-h-[23rem] pb-[1vw] relative top-[25vh] left-[2vw] shadow-md z-30 cu:pr-6">
          <h1 className="Savry text-[#828D72] relative left-[2vw] pxl cu:text-[4.8vw] md:text-[6vw] tracking-wider ">Savry</h1>
          <div className="flex gap-[2vw]">
            <div className="data cu:w-[60%] md:w-[70%] relative left-[2vw] flex flex-col items-center justify-center font-mono text-[clamp(30rem, 5vw, 50rem)]">
              <p>Savry is an intelligent inventory tracking system designed to streamline kitchen management for households, restaurants, and food businesses. It helps users efficiently track, manage, and replenish kitchen supplies, reducing waste and optimizing grocery planning. <br />
              <br />
              <a href="https://contact.savry.in" className="text-left text-[#6a9b20]">Contact</a> us for more info.</p>
            </div>
          <div className="logo shadow-xl bg-[#8DA67B] relative left-[2vw] md:top-[0.6vw] lg:mr-[2vw] cu:top-[0vw]" style={{ width: "clamp(12vw, 12vw, 14vw)", height: "clamp(12vw, 12vw, 14vw)" }}>
            <img src="/Savry.png" alt="" style={{ width: "clamp(12vw, 12vw, 14vw)", height: "clamp(12vw, 12vw, 14vw)" }} />
          </div>
          </div>
      </div>
    )
  }
  
  export default Savry