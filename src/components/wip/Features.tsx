import { useState, useEffect } from "react";
import { CheckCircle, Signal, Wifi, BatteryFull } from "lucide-react";

export default function Features() {
  const [battery, setBattery] = useState(25);
  const [lowPower, setLowPower] = useState(false);
  const [brightness, setBrightness] = useState(1);
  const [localTime, setLocalTime] = useState(getCurrentTime());

  useEffect(() => {
    const batteryInterval = setInterval(() => {
      setBattery((prev) => (prev > 20 ? prev - 1 : 20));
    }, 5000);

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
      className="bg-[#EAEDE5] w-[21vw] h-[25vw] relative top-[12.2vw] left-[76vw] rounded-tr-[3vw] rounded-tl-[3vw] pt-[1vw] border-2 border-black"
      style={{ filter: `brightness(${brightness})` }}
    >
      <div className="flex justify-between items-center px-10 py-2 w-full rounded-t-3xl">
        <span className="text-black text-sm font-semibold">{localTime}</span>
        <div className="flex gap-2 items-center">
          <Signal className="w-4 h-4 text-black" />
          <Wifi className="w-4 h-4 text-black" />
          <div className="relative flex items-center">
            <BatteryFull className="w-6 h-6 text-black" />
            <span className="absolute right-1 text-xs font-bold text-black bg-yellow-400 px-1 rounded-md">
              {battery}
            </span>
          </div>
        </div>
      </div>
      {battery === 20 && !lowPower && (
        <div className="absolute bottom-[5vw] left-1/2 transform -translate-x-1/2 bg-white/40 backdrop-blur-[0.5vw] text-black w-[85%] max-w-[320px] pt-5 pb-2 px-6 rounded-xl shadow-2xl border ">
          <p className="font-semibold text-lg text-center">Low Battery</p>
          <p className="text-sm text-gray-600 text-center mt-1">
            {battery}% of battery remaining
          </p>
          <button
            className="w-[16.9vw] h-[2vw] relative left-[-1.3vw] text-blue-500 border-t border-[gray] text-sm font-semibold mt-[1.5vw] flex items-center justify-center"
            onClick={() => setLowPower(true)}
          >
            Enable Low Power
          </button>
        </div>
      )}
      <div className="max-w-sm mx-auto p-4 bg-[#EAEDE5] rounded-3xl">
        <div className="flex justify-between items-center text-yellow-500 text-lg font-semibold mb-2">
          <span>← Notes</span>
          <span>...</span>
        </div>
        <p className="text-gray-400 text-center text-sm">25 March 2025 at {localTime}</p>
        <ul className="mt-3 space-y-3">
          {[
            "Realtime Inventory Tracking",
            "Expiry date alerts",
            "Automated stock updates",
            "Grocery list generator",
            "Recipe suggestions",
            "Multi-user Collaboration",
          ].map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-gray-700 text-[16px]">
              <CheckCircle className="text-yellow-500 w-5 h-5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
