"use client"

import type { AvailableLanguages } from "@/components/assets/data";
import { Component } from "../Home/Home";
import styles from "./Portfolio.module.css";
import SectionPortfolioHero from "./SectionPortfolioHero";
import SectionPortfolioMissionVision from "./SectionPortfolioMissionVision";
import SectionPortfolioItems from "./SectionPortfolioItems";
import { getPortfolioItem } from "./portfolioData";

export default function PortfolioPage({ portfolioId, lang }: { portfolioId: string; lang: AvailableLanguages }) {
    const portfolio = getPortfolioItem(portfolioId, lang);

    if (!portfolio) {
        return (
            <div className={styles["homepage"]}>
                <div className={`${styles["sections-container"]}`}>
                    <div className="w-full max-w-[1100px] px-4 sm:px-6 lg:px-8 mx-auto flex-1 flex flex-col items-center justify-center gap-20 py-24">
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles["homepage"]}>
            <div className="relative">
                <div className={styles["background-hero-backdrop"]} />
                <div className={styles["background-hero-foto"]} />
            </div>

            <div className={`${styles["sections-container"]}`}>
                <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mx-auto flex-1 flex flex-col gap-10 mb-20">
                    <div>
                        <SectionPortfolioHero title={portfolio.title} subtitle={portfolio.subtitle} lang={lang} />
                    </div>

                    <div>
                        <SectionPortfolioMissionVision mission={portfolio.mission} vision={portfolio.vision} />
                    </div>

                    <div>
                        <SectionPortfolioItems
                            categories={portfolio.categories}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
