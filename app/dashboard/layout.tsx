import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <section>
      <nav></nav>

      {children}
    </section>
  );
}
