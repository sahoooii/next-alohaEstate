import type { Metadata } from 'next';
import './globals.css';
import { Ubuntu } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';

const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Aloha State',
	keywords: 'rental condo vacation property real estate',
	description: 'Find your 3rd Place, in all over the world',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body className={`${ubuntu.variable} font-sans`}>
					<Providers>
						<Navbar />
						<main>{children}</main>
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
