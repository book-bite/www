import { useState, useEffect } from "react";
import { CheckCircle, Signal, Wifi} from "lucide-react";

export default function Features() {
  const [battery, setBattery] = useState(78);
  const [lowPower, setLowPower] = useState(false);
  const [brightness, setBrightness] = useState(1);
  const [localTime, setLocalTime] = useState(getCurrentTime());

  useEffect(() => {
    const batteryInterval = setInterval(() => {
      setBattery((prev) => (prev > 20 ? prev - 1 : 20));
    }, 5000); // 100 - 20 (6:40), 78 - 20 (4:48)

    return () => clearInterval(batteryInterval);
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setLocalTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    if (lowPower) {
      setTimeout(() => setBrightness(0.95), 1000);
    } else {
      setBrightness(1);
    }
  }, [lowPower]);
  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
  }

  return (
    <div
  id="phone-container"
  className="bg-[#EAEDE5] min-w-[21vw] md:min-h-[46vh] cu:h-[45vh] mt-auto absolute cu:bottom-0 top-[42vw] left-[76vw] md:mr-[2vw] z-50
             cu:rounded-br-[0vw] cu:rounded-bl-[0vw] rounded-[3vw] pt-[1vw] border-2 border-black shadow-2xl overflow-hidden"
  style={{ filter: `brightness(${brightness})` }}
>
  <div className="flex justify-between items-center px-6 py-2 w-full rounded-t-3xl">
    <span className="text-black text-[clamp(0.8rem, 1rem,1.2rem)] font-semibold">
      {localTime}
    </span>
    <div className="flex gap-2 items-center">
      <Signal className="w-4 h-4 text-black" />
      <Wifi className="w-4 h-4 text-black" />
      <div className="relative flex items-center">
        <span className="right-1 text-[clamp(0.5rem,0.7rem,1rem)] font-bold text-black px-1 rounded-md relative overflow-hidden">
          <div
            className="absolute inset-0 bg-yellow-400"
            style={{ width: `${battery}%` }}
          ></div>
          <span className="relative">{battery}%</span>
        </span>
      </div>
    </div>
  </div>

  {battery === 20 && !lowPower && (
  <div
    className="absolute hidden cu:bottom-[7vw] left-1/2 transform -translate-x-1/2 bg-white/40 
               backdrop-blur-[0.5vw] text-black w-[85%] max-w-[320px] pt-5 pb-2 px-6 
               rounded-xl shadow-2xl border cu:flex items-center justify-center flex-col"
  >
    <p className="font-semibold text-[clamp(0.8rem,1.2rem,1.5rem)] text-center">Low Battery</p>
    <p className="text-[clamp(0.6rem,0.8rem,1rem)] text-gray-600 text-center mt-1">
      {battery}% of battery remaining
    </p>
    <button
      className="w-[16.9vw] h-[2vw] text-blue-500 border-t border-gray-400 
                 text-[clamp(0.7rem,0.9rem,1rem)] font-semibold mt-[1.5vw] 
                 flex items-center justify-center"
      onClick={() => setLowPower(true)}
    >
      Enable Low Power
    </button>
  </div>
)}

  <div className="max-w-sm mx-auto p-4 bg-[#EAEDE5] rounded-3xl">
    <div className="flex justify-between items-center text-yellow-500 text-[clamp(0.9rem,1rem,1.2rem)] font-semibold mb-2">
      <span>← Notes</span>
      <span>...</span>
    </div>
    <p className="text-gray-400 text-center text-[clamp(0.7rem,0.9rem,1rem)]">
      25 March 2025 at 10:31
    </p>
    <ul className="mt-3 space-y-3">
      {[
        "Realtime Inventory Tracking",
        "Expiry date alerts",
        "Automated stock updates",
        "Grocery list generator",
        "Recipe suggestions",
        "Multi-user Collaboration",
      ].map((feature, index) => (
        <li key={index} className="flex items-center space-x-2 text-gray-700 text-[clamp(0.8rem,1rem,1.2rem)]">
          <CheckCircle className="text-yellow-500 w-5 h-5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
</div> //peak
  );
}
