import Footer from "@/app/ui/components/page/footer";
import Navigation from "@/app/ui/components/projects/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container position-relative h-100">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
