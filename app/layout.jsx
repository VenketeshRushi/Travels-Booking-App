import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import ToasterProvider from "@/providers/ToasterProvider";
export const metadata = {
  title: "Redbus",
  description: "Travels Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
