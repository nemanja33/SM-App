"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useState } from "react";

type TGenericLink = {
  href: string;
  children: string;
};

export default function GenericLink({ href, children }: TGenericLink) {
  const [active, setActive] = useState<boolean>(false);
  const prefetch = () => setActive(true);

  return (
    <Link
      className={styles.link}
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={prefetch}
    >
      {children}
    </Link>
  );
}
