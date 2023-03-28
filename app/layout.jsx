import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Redbus",
  description: "Travels Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
