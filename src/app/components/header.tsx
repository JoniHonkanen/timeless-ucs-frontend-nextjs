"use client";

import Image from "next/image";
import styles from "@/app/styles/header.module.css"; 

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo/TimeLess.png" alt="Logo" width={100} height={100} />
      </div>

      <h1 className={styles.title}>TimeLess</h1>

      <div className={styles.spacer}></div>
    </header>
  );
}
