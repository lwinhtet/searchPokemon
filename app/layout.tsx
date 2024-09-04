import type { Metadata } from 'next';
import { Chivo_Mono } from 'next/font/google';
import './globals.css';
import { ApolloWrapper } from '../lib/graphql/ApolloWrapper';

const fontstyle = Chivo_Mono({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
  title: 'Pokemon',
  description: 'Search Pokemon by name',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontstyle.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
