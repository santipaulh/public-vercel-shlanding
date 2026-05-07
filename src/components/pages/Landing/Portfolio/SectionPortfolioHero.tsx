"use client"

import type { AvailableLanguages } from "@/components/assets/data";
import { Component } from "../Home/Home";
import { useRouter } from "next/navigation";

interface SectionPortfolioHeroProps {
    title: string;
    subtitle: string;
    lang: AvailableLanguages
}

const SectionPortfolioHero = ({ title, subtitle, lang = 'en' }: SectionPortfolioHeroProps) => {
    const router = useRouter();

    return (
        <Component.Card
            backgroundColor="2"
            className="min-h-[260px] md:min-h-[300px] flex-1"
        >
            <div className="flex flex-col items-center justify-center gap-6 h-full px-4 py-6 sm:px-8">
                <Component.Text fontWeight="700" textSize="56px" color="1" shadow={true}>
                    {title}
                </Component.Text>
                <Component.Text fontWeight="400" textSize="18px" color="1" shadow={true}>
                    {subtitle}
                </Component.Text>
                <button
                    onClick={() => router.push(`/${lang}`)}
                    style={{
                        backgroundColor: "var(--homepage-color-1)",
                        color: "white",
                        padding: "10px 24px",
                        borderRadius: "var(--rules-page-dashboard-roounded_border_corners-1)",
                        fontSize: "14px",
                        fontWeight: "600",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "0.8";
                        e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "1";
                        e.currentTarget.style.transform = "scale(1)";
                    }}
                >
                    ← Back
                </button>
            </div>
        </Component.Card>
    );
};

export default SectionPortfolioHero;
