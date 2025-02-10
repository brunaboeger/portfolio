import "@/app/ui/globals.scss";
import store from "@/app/lib/store";
import { font } from "@/app/ui/fonts";

export const metadata = {
  title: store.home.metadata.title,
  description: store.home.metadata.description,
  authors: store.home.metadata.authors,
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
