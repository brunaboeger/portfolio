export default function Paleta() {
  const paleta = [
    "#003148",
    "#117F95",
    "#4B191A",
    "#ED3300",
    "#F15103",
    "#EF7802",
    "#F3942C",
    "#F5D89C",
  ];

  return (
    <div className="padding-container mb-8 flex wrap">
      {paleta.map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: color,
            width: "calc(25% - 8px)",
            height: "100px",
          }}
          className="mr-2 mb-2"
        />
      ))}
    </div>
  );
}
