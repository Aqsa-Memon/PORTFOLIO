import Footer from "../components/footer";
import Header from "../components/header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            <Header />
            {children}
            <Footer />
            </body>
      </html>
    );
  }