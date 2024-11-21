import "@/app/ui/globals.scss";
import { merriweather } from "@/app/ui/fonts";

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
      <body className={`${merriweather.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
