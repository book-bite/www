function handleClick() {
    location.href = "https://github.com/Savry-in"
}
const Contact = () => {
  return (
    <button className="bg-[black] h-[3vw] w-[10vw] relative top-[16.5vh] left-[54vw] rounded-[4vw] text-white flex flex-col items-center justify-center hover:scale-110 transition duration-300 hover:cursor-pointer" onClick={handleClick}>
        Visit Us
    </button>
  )
}

export default Contact