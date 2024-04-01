
import "./globals.css";


export const metadata = {
  title: "GeekStar Blog",
  description: "I write blogs on technical Dev Topics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='bg-slate-900 text-white max-w-3xl mx-auto py-20 px-4'>
      <body>{children}</body>
    </html>
  );
}
