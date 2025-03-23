import "@/src/app/globals.scss";
import { font } from "@/src/app/fonts";
import { Suspense } from "react";
import Navigation from "@/src/components/navigation";
import Loading from "@/src/app/loading";

export const metadata = {
  title: "Portfolio Bruna Boeger",
  description: "Bruna Boeger - UX/UI Developer Portfolio",
  authors: [{ "name": "Bruna Boeger" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${font.paragraph} text-slate-50 scroll-smooth antialiased relative bg-slate-950 bg-gradient overflow-hidden`}>
        <Suspense fallback={<Loading />}>
          <Navigation />
          <main className="p-[36px] h-screen w-screen z-20 relative overflow-hidden">
            <div className="h-full overflow-y-auto p-6">
              {children}
            </div>
          </main>
        </Suspense>
      </body>
    </html>
  );
}
