import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NextUi from "@/nextui";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NextUi> */}
          <Header />
          {children}
          <Footer />
        {/* </NextUi> */}
      </body>
    </html>
  );
}
