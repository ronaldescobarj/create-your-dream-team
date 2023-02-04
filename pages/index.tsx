import LayoutWrapper from "@/components/LayoutWrapper";
import Link from "next/link";
import React from "react";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <LayoutWrapper>
      <div className={`${styles.bgImageStadium} h-screen p-20 flex flex-col`}>
        <h1 className="text-slate-100 text-5xl font-bold mb-5">
          Have you ever dreamed of having Messi and Ronaldo together in a team?
        </h1>
        <h3 className="text-slate-300 text-2xl mb-10">
          With Build your dream team, you can have any player you want in your
          team! Set the lineup with the players you always wanted to play
          together.
        </h3>
        <div>
          <Link href="/create-team">
            <button className="bg-slate-100 text-lime-900 p-5 text-2xl font-bold rounded-md">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </LayoutWrapper>
  );
}
