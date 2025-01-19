import Navbar from "@/app/ui/components/page/navbar";
import Footer from "@/app/ui/components/page/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container position-relative h-100">
      <div className="position-sticky z-index-20">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}
