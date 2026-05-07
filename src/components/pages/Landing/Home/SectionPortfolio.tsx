"use client"

import { useState } from "react";
import type { AvailableLanguages } from "@/components/assets/data";
import { Component } from "./Home";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons"
import { AssetsData } from "@/components/assets/data";
import Image from "next/image";

interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

interface SectionPortfolioProps {
    lang: AvailableLanguages
}

const SectionPortfolio = ({ lang = 'en' }: SectionPortfolioProps) => {
    const portfolioItems: PortfolioItem[] = [
        {
            id: "1",
            title: "Botketing",
            description: "High-scalable vertical SaaS, Whitelabel CRM Solution.",
            image: `/IMG_20250621_184627 (1).jpg`,
            link: `/${lang}/portfolio/botketing-crm`
        },
        {
            id: "2",
            title: "Marketing Agency",
            description: "x2 clients, later developing Botketing CRM",
            image: `/IMG_0729.jpg`,
            link: `/${lang}/portfolio/agencia-marketing-2024`
        },
        {
            id: "3",
            title: "Early days at Discord",
            description: "From User to Admin, 13yo to 16yo.",
            image: `/imgdiscorddays.png`,
            link: `/${lang}/portfolio/early-days-discord-communities`
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageHovered, setImageHovered] = useState(false);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    };

    const currentItem = portfolioItems[currentIndex];


    return (
        <div className="flex flex-col items-center justify-center gap-8 py-8 sm:flex-row">
            <Component.ButtonClick
                onClick={handlePrevious}
                icon={faChevronLeft}
            />

            <a
                href={currentItem.link ?? undefined}
                className="relative flex flex-col w-full max-w-[500px] rounded-lg overflow-hidden cursor-pointer"
                onMouseEnter={() => setImageHovered(true)}
                onMouseLeave={() => setImageHovered(false)}
                style={{
                    boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.30)",
                }}
            >
                <div className="h-[180px] sm:h-[220px] overflow-hidden">
                    <img
                        src={currentItem.image}
                        className="w-full h-full object-cover transition-opacity duration-300"
                        style={{
                            opacity: imageHovered ? 0.8 : 1
                        }}
                        alt={currentItem.title}
                    />
                </div>
                <div className="border-t border-[var(--homepage-color-1)] bg-[var(--homepage-color-1)] px-4 py-4 flex flex-col gap-2">
                    <Component.Text color="1" textSize="16px" fontWeight="600">
                        {currentItem.title}
                    </Component.Text>
                    <Component.Text color="1" textSize="14px" fontWeight="400">
                        {currentItem.description}
                    </Component.Text>
                </div>
            </a>

            <Component.ButtonClick
                onClick={handleNext}
                icon={faChevronRight}
            />
        </div>
    )
}

export default SectionPortfolio