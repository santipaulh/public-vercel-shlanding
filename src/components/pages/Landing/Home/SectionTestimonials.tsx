"use client"

import { useState } from "react";
import type { AvailableLanguages } from "@/components/assets/data";
import { Component } from "./Home";
import homeLanguage from "./Home.language.json";
import dynamic from "next/dynamic";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { AssetsData } from "@/components/assets/data";
import Image from "next/image";

const FontAwesomeIcon = dynamic(
    () => import("@fortawesome/react-fontawesome").then(x => x.FontAwesomeIcon),
    { ssr: !!false }
)

interface Testimonial {
    name: string;
    role: string;
    company: string;
    image: string;
    text: string;
    rating: number;
}

interface SectionTestimonialsProps {
    lang: AvailableLanguages;
}

const SectionTestimonials = ({ lang }: SectionTestimonialsProps) => {
    const testimonials: Testimonial[] = homeLanguage[lang].testimonials.items;

    const [showAll, setShowAll] = useState(false);

    const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);
    const hasMore = testimonials.length > 3;

    const TestimonialCard = ({ testimonial, hasBorder = false }: { testimonial: Testimonial; hasBorder?: boolean }) => (
        <Component.Card backgroundColor="1" border={{ color: hasBorder ? "2" : "1", showing: ["up"]}}>
            <div className="flex flex-row items-center gap-4 mb-4">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <div className="flex flex-col flex-1">
                    <Component.Text color="2" textSize="16px" fontWeight="600">
                        {testimonial.name}
                    </Component.Text>
                    <Component.Text color="2" textSize="13px" fontWeight="400">
                        {testimonial.role} at {testimonial.company}
                    </Component.Text>
                </div>
            </div>

            <div className="flex flex-row gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <FontAwesomeIcon
                        key={`star-${idx}`}
                        icon={faStar}
                        className="text-[#FFB800] text-[14px]"
                    />
                ))}
            </div>

            <Component.Text color="2" textSize="14px" fontWeight="400">
                {testimonial.text}
            </Component.Text>
        </Component.Card>
    );

    const ViewMoreCard = () => (
        <Component.Card backgroundColor="1">
            <div
                style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
                onClick={() => setShowAll(true)}
            >
                <Component.Text color="3" textSize="18px" fontWeight="600">
                    View More
                </Component.Text>
                <Component.Text color="2" textSize="14px" fontWeight="400">
                    {testimonials.length - 3} more testimonial{testimonials.length - 3 !== 1 ? "s" : ""}
                </Component.Text>
            </div>
        </Component.Card>
    )

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-8 w-full">
            {visibleTestimonials.map((testimonial, idx) => {
                const row = Math.floor(idx / 3);
                const col = idx % 3;
                const isOddRow = (row + 1) % 2 === 1;

                let hasBorder = false;
                if (isOddRow && col === 1) hasBorder = true; // fila impar, centro
                if (!isOddRow && (col === 0 || col === 2)) hasBorder = true; // fila par, extremos

                return (
                    <TestimonialCard 
                        key={`12371087-${idx}`} 
                        testimonial={testimonial}
                        hasBorder={hasBorder}
                    />
                );
            })}
            {!showAll && hasMore && <ViewMoreCard />}
        </div>
    )
}

export default SectionTestimonials;
