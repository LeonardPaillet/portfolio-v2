import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export const metadata = {
  title: "Léonard Paillet Portfolio",
  description: "Le portfolio de Léonard Paillet Développeur web",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
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
