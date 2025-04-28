import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOSWrapper from '@/components/AOSWrapper';

export const metadata = {
  title: 'Gen Clouds - Modern Cloud & AI Solutions',
  description: 'Next-generation cloud computing and AI solutions for your business',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white dark:bg-black overflow-x-hidden">
      <body className="min-h-screen overflow-x-hidden">
        <AOSWrapper />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
