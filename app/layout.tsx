import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Galeria Zdjęć',
  description: 'Piękna galeria zdjęć stworzona w Next.js z Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <nav className="bg-fuchsia-400 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-purple-600 transition-colors"
              >
                Strona Główna
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-purple-600 transition-colors"
              >
                O Nas
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-purple-600 transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
