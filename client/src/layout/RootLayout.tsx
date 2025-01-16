import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <>
     {children} 
    </>
  );
}
