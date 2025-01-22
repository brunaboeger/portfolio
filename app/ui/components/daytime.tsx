import { useState, useEffect } from "react";

export default function UserDayTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const actualTime = new Date().getHours();
    console.log(actualTime);

    if (actualTime >= 6 && actualTime < 12) {
      setTime("morning");
    } else if (actualTime >= 12 && actualTime < 18) {
      setTime("afternoon");
    } else {
      setTime("night");
    }
  }, []);

  return (
    <div
      className={`banner-image bg-gradient-${time} position-absolute z-index-10`}
    >
      {/* <div className="bg-banner-texture"></div> */}
    </div>
  );
}
