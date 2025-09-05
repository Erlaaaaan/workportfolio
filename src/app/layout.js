import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Erlan Justin",
  description: "Portfolio",
  icons: {
    icon: '/123123.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
