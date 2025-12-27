import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import GooeyFilter from "@/components/navbar/Filters";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <GooeyFilter />
        {children}
      </body>
    </html>
  );
}
