import { Header } from '@components';
import { LayoutChildrenType } from '@types';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ weight: ['400', '700'], preload: true, subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Way2AR',
  description: 'Test task',
  authors: [
    {
      name: 'Sargis Hakobyan @sargis_hakobyan',
      url: 'https://drive.google.com/file/d/1n0pY9zmITslZdbEcFHO7F1fEWwZNYLDY/view?usp=sharing',
    },
  ],
};

export default function RootLayout({ children }: LayoutChildrenType) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
