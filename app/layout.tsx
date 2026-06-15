import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { homeMetadata } from '@/lib/metadata';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = homeMetadata;

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#171717'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            data-scroll-behavior="smooth"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <body
                className="flex min-h-full flex-col bg-white text-neutral-900"
                suppressHydrationWarning
            >
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
            </body>
        </html>
    );
}
