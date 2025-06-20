import './globals.css';
import { ReactNode } from 'react';
//import Header from '@/components/Header';

export const metadata = {
  title: 'Finispect',
  description: 'Professional snagging inspections for new builds.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased font-sans">
        {/* <Header /> */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
