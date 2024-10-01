import type { Metadata } from 'next';
import './globals.css';
import { Ubuntu } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';

const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Vacation Rentals',
	keywords: 'rental condo vacation property real estate',
	description: 'Find your 3rd Place, in all over the world',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${ubuntu.variable} font-sans`}>
				<Navbar />
				<main className='container py-10'>{children}</main>
			</body>
		</html>
	);
}
