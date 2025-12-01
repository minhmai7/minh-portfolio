import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600","700", "800"],
});

export const metadata = {
  title: "Minh Mai - Portfolio",
  description: "Full-stack developer portfolio showcasing projects and skills",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
