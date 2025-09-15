import React, { ReactNode } from 'react';
import "tw-elements/dist/css/tw-elements.min.css";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="./assets/img/mini-logo.png" />
        <title>Dashboard พรรคเศรษฐกิจ</title>
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
