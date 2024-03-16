import '@/app/ui/global.css';
import * as fonts from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fonts.inter.className} antialiased`}>{children}</body>
    </html>
  );
}
