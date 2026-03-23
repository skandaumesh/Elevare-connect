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
    "elevare academy",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="flex flex-col min-h-screen antialiased overflow-x-hidden"
        style={{ background: "#F9F8F3" }}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
