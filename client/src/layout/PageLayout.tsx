import React from 'react';
import style from './page-layout.module.scss';
import Header from './header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({children}: LayoutProps) {
  return (
    <div className={style.main}>
    <Header />
     {children} 
    </div>
  );
}
