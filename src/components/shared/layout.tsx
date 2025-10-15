import React from 'react';

import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
