import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HK Motorworks — Classic Custom Motorcycles · Cikampek',
  description:
    'Hand-built in Cikampek, Karawang. Cafe Racers, Bobbers, Choppers & Scramblers — seasoned metal, raw soul.',
  keywords: [
    'HK Motorworks',
    'Cikampek',
    'Karawang',
    'custom motorcycle',
    'cafe racer',
    'bobber',
    'chopper',
    'scrambler',
    'motor klasik',
    'motor custom Jawa Barat',
  ],
  alternates: { canonical: 'https://hkmotorworks.id' },
  openGraph: {
    title: 'HK Motorworks — Crafting Timeless Iron',
    description: 'Built by hand in Cikampek. Cafe Racers, Bobbers, Choppers, Scramblers.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="min-h-full">
      <body className="min-h-full bg-obsidian text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
