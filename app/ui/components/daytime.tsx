import { useState, useEffect } from "react";

export default function UserDayTime() {
  type TimeOfDay = "morning" | "afternoon" | "night";
  const [time, setTime] = useState<TimeOfDay | "">("");

  const images = {
    morning: {
      src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTJiNnE5ejVnMHBnMGxnNDdrNWp2aGV0Z3dodW83djU0dGFpcmF1MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d5PPYjcb3caPTHM3hv/giphy.gif",
      alt: "Morning sky gif",
      background: "rgb(140 229 255)",
      opacity: 0.5,
    },
    afternoon: {
      src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBiYTQyYTQ3OWY1YTFiMjM4ZTdmMmE3ZWFjM2Q2NmQ4MTM4N2FlNCZlcD12MV91c2VyX2Zhdm9yaXRlcyZjdD1n/d5PPYjcb3caPTHM3hv/giphy.gif",
      alt: "Afternoon sky gif",
      background: "rgb(136 255 177)",
      opacity: 0.5,
    },
    night: {
      src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBiYTQyYTQ3OWY1YTFiMjM4ZTdmMmE3ZWFjM2Q2NmQ4MTM4N2FlNCZlcD12MV91c2VyX2Zhdm9yaXRlcyZjdD1n/HZwazRfmuiVSSBjoGw/giphy.gif",
      alt: "Evening sky gif",
      background: "rgb(253 216 255)",
      opacity: 0.8,
    },
  };

  useEffect(() => {
    const actualTime = new Date().getHours();

    if (actualTime >= 6 && actualTime < 12) {
      setTime("morning");
    } else if (actualTime >= 12 && actualTime < 18) {
      setTime("afternoon");
    } else {
      setTime("night");
    }
  }, []);

  return (
    <div className={`banner-image position-absolute top-0 z-index-10`}>
      <div
        className="w-100"
        style={{ background: time ? images[time].background : "transparent" }}
      >
        {time && (
          <img
            src={images[time].src}
            alt={images[time].alt}
            className="w-100 h-100 object-cover"
            style={{ opacity: images[time].opacity }}
          />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          zIndex: 60,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, #ffffff00, #ffffff)",
        }}
      />
    </div>
  );
}
