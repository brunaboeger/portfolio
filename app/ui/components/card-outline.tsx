export default function CardOutline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="masonry-item hover-translateY-2 flex-column border-gray-100 round-3 h-auto">
      {children}
    </div>
  );
}
