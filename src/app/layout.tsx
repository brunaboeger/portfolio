import "@/src/app/globals.scss";
import { font } from "@/src/app/fonts";
import Navigation from "@/src/components/navigation";

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
      <body className={`${font.paragraph} text-slate-50 antialiased relative bg-gradient`}>
        <Navigation />
        <main className="p-[36px] h-screen z-10 relative">
          <div className="p-4 h-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
