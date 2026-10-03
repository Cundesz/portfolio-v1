import type { Metadata } from 'next';
import { Syne, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const syne = Syne({ subsets: ['latin'], variable: '--font-disp', weight: ['700', '800'] });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500', '700'] });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'João Facundes — Desenvolvedor de Software',
  description:
    'Portfólio de João Facundes, desenvolvedor em Salvador: sites, interfaces e sistemas web. Projeto ERP Lite em produção.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${syne.variable} ${grotesk.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
