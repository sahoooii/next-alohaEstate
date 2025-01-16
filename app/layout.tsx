import type { Metadata } from 'next';
import './globals.css';
import { Ubuntu } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Aloha Estate',
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
						<div className='relative min-h-screen pb-[100px]'>
							<Navbar />
							<main>{children}</main>
							<Footer />
						</div>
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
