import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import ToasterProvider from "@/providers/ToasterProvider";
import Providers from "@/providers/Providers";

export const metadata = {
  title: "Redbus",
  description: "Travels Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ToasterProvider />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
