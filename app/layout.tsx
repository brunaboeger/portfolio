import "@/app/ui/globals.scss";
import { font } from "@/app/ui/fonts";

export const metadata = {
  title: "Portfolio Bruna Boeger",
  description: "Bruna Boeger - UX/UI Developer Portfolio",
  authors: [{ name: "Bruna" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${font.paragraph} antialiased bg-noise`}>
        {children}
      </body>
    </html>
  );
}
