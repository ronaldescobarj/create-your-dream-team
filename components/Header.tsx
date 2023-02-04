import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-50 flex items-center justify-between py-5 pl-5 pr-10">
      <Link href="/">
        <h1 className="text-4xl text-lime-900">
          build your <b className="bg-lime-900 text-slate-50">Dream Team</b>
        </h1>
      </Link>
      <Link href="/about" className="text-lime-900">
        About
      </Link>
    </header>
  );
}
