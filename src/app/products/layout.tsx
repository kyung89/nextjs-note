import Link from "next/link";
import styles from "./layout.module.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/products/women">여성옷</Link>
          <Link href="/products/men">남성옷</Link>
        </nav>
      </header>
      <section className={styles.product}>{children}</section>
    </div>
  );
}
