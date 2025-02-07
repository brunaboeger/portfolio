import Footer from "@/app/ui/components/page/footer";
import Navbar from "@/app/ui/components/page/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container position-relative h-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
