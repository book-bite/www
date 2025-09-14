function handleClick() {
    location.href = "https://github.com/book-bite"
}
const Contact = () => {
  return (
    <button className="bg-[black] md:h-[4.5vw] md:w-[15vw] cu:h-12 cu:w-48 relative cu:top-[16.5vh] cu:left-[54vw] md:left-[24vw] md:top-[28vh] rounded-[4vw] text-white flex flex-col items-center justify-center hover:scale-110 transition duration-300 hover:cursor-pointer" onClick={handleClick}>
        Visit Us
    </button>
  )
}

export default Contact