import { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

//seo를 할때는 metadata를 사용하고 next에서 제공하는 type인 Metadata를 적용하면됨
export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진제품을 판매하는 곳임",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>Demo Note </h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>

            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
