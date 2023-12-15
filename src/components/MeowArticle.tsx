"use client";

import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

// eslint-disable-next-line @next/next/no-async-client-component
export default function MeowArticle() {
  const [text, setText] = useState();

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
