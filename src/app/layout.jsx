import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Elevare Connect | Where Ambition Finds its Direction",
  description:
    "Elevare Connect shapes confident, career-ready individuals through expert-led coaching, skill development, and mentorship. Professional training backed by 20+ years of experience.",
  keywords: [
    "mentorship",
    "career coaching",
    "professional development",
    "campus to corporate",
    "soft skills training",
    "elevare connect",
    "interview preparation",
    "placement training",
  ],
  openGraph: {
    title: "Elevare Connect | Where Ambition Finds its Direction",
    description:
      "Expert-led mentorship and coaching to transform students into confident professionals.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen antialiased overflow-x-hidden font-['DM_Sans'] bg-[#F9F8F3] text-[#52525B]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
