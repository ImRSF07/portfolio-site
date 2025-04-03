import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';

import MainLayout from './layouts/MainLayout';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const firaCode = Fira_Code({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ImRSF07',
  description: 'Portfolio Site',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={firaCode.className}>
        <MainLayout>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </MainLayout>
      </body>
    </html>
  );
}
