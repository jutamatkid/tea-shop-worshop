import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

function Wearwoft() {
  const [isDark, setIsDark] = useState(false);
  const [isWolfWakeUp, setIsWolfWakeUp] = useState(false);

  useEffect(() => {
    console.log("render every time");
  });

  useEffect(() => {
    console.log("render on init");
    
  });

  useEffect(() => {
    console.log(`status: ${isWolfWakeUp}`);
  }, [isWolfWakeUp]);

  useEffect(() => {
    if (isDark) {
      setIsWolfWakeUp(true);
    } else {
      setIsWolfWakeUp(false);
    }
  }, [isDark]);

  return (
    <div>
      <p>เวลา : {isDark ? "กลางคืน" : "กลางวัน"}</p>
      <p>หมาป่า: {isWolfWakeUp ? "ตื่น" : "หลับ"}</p>
      <button onClick={() => setIsDark((e) => !e)}>Toggle derk</button>
    </div>
  );
}

export default Wearwoft;
