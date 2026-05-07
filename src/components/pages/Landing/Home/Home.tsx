"use client"

import styles from "./Home.module.css";
import SectionHero from "./SectionHero";
import SectionPortfolio from "./SectionPortfolio";
import SectionResume from "./SectionResume";
import SectionSkills from "./SectionSkills";
import SectionTimeline from "./SectionTimeline";
import SectionTestimonials from "./SectionTestimonials";
import dynamic from "next/dynamic";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { HTMLAttributes } from "react";
import translations from "./Home.language.json";
import type { AvailableLanguages } from "@/components/assets/data";

interface HomeProps {
    lang: AvailableLanguages
}

const FontAwesomeIcon = dynamic(
    () => import("@fortawesome/react-fontawesome").then(x => x.FontAwesomeIcon),
    { ssr: !!false }
)

export const Component = {
    Card: ({
        backgroundColor = "1",
        border,
        children,
        className
    }: {
        className?: HTMLAttributes<HTMLDivElement>["className"]
        backgroundColor?: "1" | "2"
        border?: { color: "1" | "2", showing: Array<"up" | "left" | "right" | "down"> }
        children: React.ReactNode
    }) => {
        const bgColorMap = {
            "1": "#FFFFFF",
            "2": "var(--homepage-color-1)"
        };

        const borderColorMap = {
            "1": "#FFFFFF",
            "2": "var(--homepage-color-1)"
        };

        const borderStyles: React.CSSProperties = {};

        if (border) {
            const borderColor = borderColorMap[border.color];
            const borderSize = "8px";

            if (border.showing.includes("up")) {
                borderStyles.borderTop = `${borderSize} solid ${borderColor}`;
            }
            if (border.showing.includes("down")) {
                borderStyles.borderBottom = `${borderSize} solid ${borderColor}`;
            }
            if (border.showing.includes("left")) {
                borderStyles.borderLeft = `${borderSize} solid ${borderColor}`;
            }
            if (border.showing.includes("right")) {
                borderStyles.borderRight = `${borderSize} solid ${borderColor}`;
            }
        }

        return (
            <div
                style={{
                    backgroundColor: bgColorMap[backgroundColor],
                    ...borderStyles
                }}
                className={`${styles["card"]} ${className} flex flex-col rounded-lg shadow-md p-6 h-full`}
            >
                {children}
            </div>
        );
    },
    ButtonClick: ({
        onClick,
        icon,
        text
    }: {
        onClick: () => void
        icon: IconDefinition
        text?: string
    }) => (
        <button
            onClick={onClick}
            className={`${styles["button-memo"]} p-3 hover:scale-101 hover:cursor-pointer transition-transform flex flex-row items-center justify-center gap-2`}
            style={{
                minWidth: text ? "auto" : "50px",
                minHeight: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <FontAwesomeIcon icon={icon} className="text-white text-[20px]" />
            {text && <span className="text-white text-[14px] font-semibold uppercase">{text}</span>}
        </button>
    ),
    ButtonRedirect: ({
        src,
        text,
        disabled = false
    }: {
        disabled?: boolean
        src: string | null
        text: string
    }) => (
        <a
            href={src ?? undefined}
            style={{
                opacity: (disabled || !src) ? "0.8" : "1",
                cursor: (disabled || !src) ? "not-allowed" : "pointer"
            }}
            className={`${styles["text-text-1"]} ${styles["button-memo"]} hover:scale-101 hover:cursor-pointer uppercase text-[13.5px] text-normal`}
        >
            {text}
        </a>
    ),
    Text: ({
        color,
        textSize,
        fontWeight,
        style = undefined,
        shadow = false,
        children
    }: {
        color: "1" | "2" | "3"
        textSize: string
        fontWeight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
        style?: "quote" | "bullet-point"
        shadow?: boolean
        children: React.ReactNode
    }) => {
        const colorMap = {
            "1": "#FFFFFF",
            "2": "#616161",
            "3": "var(--homepage-color-1)"
        };

        const shadowStyle = shadow ? "2px 2px 4px rgba(0, 0, 0, 0.29)" : "none";

        if (style === "quote") {
            return (
                <div
                    style={{
                        borderLeft: "4px solid var(--homepage-color-1)",
                        paddingLeft: "16px",
                        color: colorMap[color],
                        fontSize: textSize,
                        fontWeight,
                        textShadow: shadowStyle
                    }}
                >
                    {children}
                </div>
            );
        }

        if (style === "bullet-point") {
            return (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px",
                        alignItems: "flex-center",
                        justifyContent: "center",
                        color: colorMap[color],
                        fontSize: textSize,
                        fontWeight,
                        textShadow: shadowStyle
                    }}
                >
                    <span>•</span>
                    <div>{children}</div>
                </div>
            );
        }

        return (
            <div
                style={{
                    color: colorMap[color],
                    fontSize: textSize,
                    fontWeight,
                    textShadow: shadowStyle
                }}
            >
                {children}
            </div>
        );
    }
}


export default function HomePage({ lang = 'en' }: HomeProps) {
    const t = translations[lang];
    
    return (
        <div className={styles["homepage"]}>
            <div className="relative">
                <div className={styles["background-hero-backdrop"]} />
                <div className={styles["background-hero-foto"]} />
            </div>

            <div className={`${styles["sections-container"]}`}>
                <div className="w-full max-w-[1400px] px-[3.5%] sm:px-[3%] lg:px-[2.5%] mx-auto flex-1 flex flex-col gap-20">
                    <div>
                        <SectionHero lang={lang} />
                    </div>

                    <div className={""}>
                        <SectionResume lang={lang} />
                    </div>

                    <div className={""}>
                        <SectionSkills lang={lang} />
                    </div>


                    <div className={""}>
                        <div className="flex flex-col">
                            <Component.Text fontWeight="600" textSize="30px" color="2">
                                {t.portfolio.title}
                            </Component.Text>
                            <Component.Text style="quote" fontWeight="600" textSize="16px" color="2">
                                {t.portfolio.subtitle}
                            </Component.Text>
                        </div>
                        <SectionPortfolio lang={lang} />
                    </div>

                    <div className={""}>
                        <div className="flex flex-col">
                            <Component.Text fontWeight="600" textSize="30px" color="2">
                                {t.testimonials.title}
                            </Component.Text>
                            <Component.Text style="quote" fontWeight="600" textSize="16px" color="2">
                                {t.testimonials.subtitle}
                            </Component.Text>
                        </div>
                        <SectionTestimonials lang={lang} />
                    </div>

                    <div className={""}>
                        <div className="flex flex-col">
                            <Component.Text fontWeight="600" textSize="30px" color="2">
                                {t.timeline.title}
                            </Component.Text>
                            <Component.Text style="quote" fontWeight="600" textSize="16px" color="2">
                                {t.timeline.subtitle}
                            </Component.Text>
                        </div>
                        <SectionTimeline lang={lang} />
                    </div>
                </div>
            </div>
        </div >
    )
}