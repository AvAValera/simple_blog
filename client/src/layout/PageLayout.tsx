import React from "react";
import style from "./page-layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import StoryInbox from "./footer/StoryInbox";

interface LayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: LayoutProps) {
  return (
    <div className={style.main}>
      <Header />
      <div className={style.content}>{children}</div>
      <StoryInbox />
      <Footer />
    </div>
  );
}
