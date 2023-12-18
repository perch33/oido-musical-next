import { Jost } from "next/font/google";
import "./globals.css";
import "stellarstyles.css";
const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Oído Musical",
  description: "Entrena tu oído absoluto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
