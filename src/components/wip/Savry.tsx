const Savry = () => {
    return (
      <div className="bg-[#D9D9D9] h-[42vh] w-[40vw] relative top-[25vh] left-[2vw] shadow-md z-30">
          <h1 className="Savry text-[#828D72] relative left-[2vw] pxl text-[6.05vw] tracking-wider ">Savry</h1>
          <div className="flex gap-[2vw]">
            <div className="data w-[60%] relative left-[2vw] flex flex-col items-center justify-center text-[1vw] font-mono">
              <p>Savry is an intelligent inventory tracking system designed to streamline kitchen management for households, restaurants, and food businesses. It helps users efficiently track, manage, and replenish kitchen supplies, reducing waste and optimizing grocery planning. <br />
              <a href="mailto:hello@Savry.in" className="text-left text-[#6a9b20]">Contact</a> us for more info.</p>
            </div>
          <div className="logo shadow-xl h-[10vw] w-[10vw] bg-[#8DA67B] relative left-[2vw]">
            <img src="/Savry.png" alt="" />
          </div>
          </div>
      </div>
    )
  }
  
  export default Savry