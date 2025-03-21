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
      <body className={`${font.paragraph} antialiased relative`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
