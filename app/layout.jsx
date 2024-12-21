import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { Poppins } from 'next/font/google'

export const metadata = {
  title: "Léonard Paillet Portfolio",
  description: "Le portfolio de Léonard Paillet Développeur web",
};

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function RootLayout({children}) {
  return (
    <html lang="en" className={poppins.className}>
      <body
        className={`bg-blue text-white`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
