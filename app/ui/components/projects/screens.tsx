export default function Screens({ images }: { images?: string[] }) {
  const placeholderList = [
    "bg-orange-100",
    "bg-orange-200",
    "bg-orange-300",
    "bg-orange-400",
    "bg-orange-500",
    "bg-orange-600",
  ];

  return (
    <section className="p-container bg-blue-100">
      <div className="grid-template-columns-3 gap-5 p-container">
        {images
          ? images.map((image, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${image || ""})` }}
                className="h-600x round-3 shadow-3 hover-translateY-2"
              />
            ))
          : placeholderList.map((placeholder, index) => (
              <div
                key={index}
                className={`h-600x ${placeholder} round-3 shadow-3 hover-translateY-2`}
              />
            ))}
      </div>
    </section>
  );
}
