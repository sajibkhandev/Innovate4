import Image from 'next/image'
import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "./components/navber";
import Footer from "./components/footer";
import FullImage from './../public/fullImage.jpg'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
      <Image
       src={FullImage}
       alt="Picture of the author"
       className='absolute top-0 left-0 w-full -z-[99]'
     />
        <Navber/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
