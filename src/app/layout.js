import "@/src/assets/scss/styles.scss";

export const metadata = {
  title: "Portfolio Bruna Boeger",
  description: "Bruna Boeger - UX/UI Developer Portfolio",
  authors: [{ name: "Bruna" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
