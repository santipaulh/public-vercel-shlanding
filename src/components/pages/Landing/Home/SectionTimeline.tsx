"use client"

import styles from "./Home.module.css";
import dynamic from "next/dynamic";
import { Component } from "./Home";
import homeLanguage from "./Home.language.json";
import type { AvailableLanguages } from "@/components/assets/data";
import {
    faCheck,
} from "@fortawesome/free-solid-svg-icons"

const FontAwesomeIcon = dynamic(
    () => import("@fortawesome/react-fontawesome").then(x => x.FontAwesomeIcon),
    { ssr: !!false }
)

interface SectionTimelineProps {
    lang: AvailableLanguages;
}

const SectionTimeline = ({ lang }: SectionTimelineProps) => {
    const data = homeLanguage[lang];
    const content = data.timeline;

    return (
        <div className="flex flex-col">
            {content.items.map((x, idx) => {
                const isEven = idx % 2 === 0;
                const isFirst = idx === 0;
                const isLast = idx + 1 === content.items.length;

                const tagText = data.timelineTagTypes[x.type as keyof typeof data.timelineTagTypes] ?? "Unknown";

                const formatMonth = [
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];

                const MainCard = (
                    <Component.Card
                        backgroundColor="1"
                        border={{ color: "2", showing: ["up"] }}
                        className="flex-1 relative shadow-lg"
                    >
                        <div className="flex flex-col gap-[16px]">
                            <div className="flex flex-col">
                                <Component.Text color="2" textSize="18px" fontWeight="600">
                                    {x.title}
                                </Component.Text>
                                <Component.Text color="3" textSize="15px" fontWeight="400">
                                    {tagText} ({x.start_year} {formatMonth[x.start_month].slice(0, 3)} - {x.end_year} {formatMonth[x.end_month].slice(0, 3)})
                                </Component.Text>
                                <Component.Text color="2" textSize="15px" fontWeight="400">
                                    {x.subtitle}
                                </Component.Text>
                            </div>
                            <Component.Text color="2" textSize="15px" fontWeight="400">
                                {x.description}
                            </Component.Text>
                            {!x.src ? null : (
                                <div className={`flex flex-row justify-end`}>
                                    <Component.ButtonRedirect
                                        src={x.src ?? null}
                                        disabled={!x.src}
                                        text="See more"
                                    />
                                </div>
                            )}
                        </div>
                    </Component.Card>
                )

                const KeyTakesCard = (
                    <Component.Card
                        backgroundColor="2"
                        className="flex-1 relative shadow-md"
                    >
                        <div className="flex flex-col gap-[16px]">
                            <Component.Text color="1" textSize="18px" fontWeight="400" shadow>
                                {data.keyTakeawaysTitle}
                            </Component.Text>
                            <div className="flex flex-col gap-1">
                                {x.keytakes.map((key, keyidx) => (
                                    <div
                                        key={`${keyidx}huidsahdiusahduias`}
                                        className={`font-normal text-[16px] flex flex-row gap-2 items-start`}
                                    >
                                        <FontAwesomeIcon
                                            className="mt-[5px]"
                                            icon={faCheck}
                                            color="white"
                                        />
                                        <Component.Text color="1" textSize="16px" fontWeight="400">
                                            {key}
                                        </Component.Text>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Component.Card>
                )

                return (
                    <div
                        key={`${idx}12dsjaioadsjidsa3810923u17321`}
                        className="w-full flex flex-col gap-8 relative py-12 lg:flex-row lg:justify-between lg:gap-5"
                    >
                        <div
                            className="hidden lg:block absolute left-1/2"
                            style={{
                                top: isFirst ? "60px" : "0px",
                                bottom: isLast ? "calc(100% - 80px)" : "0px",
                                width: "6px",
                                backgroundColor: "rgba(var(--homepage-color-rgb-1), 0.15)",
                                transform: "translateX(-50%)"
                            }}
                        />
                        <div
                            className="hidden lg:block absolute left-1/2 z-10"
                            style={{
                                transform: "translate(-50%, 0)",
                                top: "60px"
                            }}
                        >
                            <div
                                className={`flex flex-row justify-center items-center rounded-full  font-bold text-[26px] ${styles["text-title-1"]} shadow-md`}
                                style={{
                                    backgroundColor: "var(--homepage-color-2)",
                                    width: "55px",
                                    height: "55px",
                                    color: "#fff",
                                    border: "4px solid #fff"
                                }}
                            >
                                {idx + 1}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 lg:w-[calc(50%-30px)]">
                            {isEven ? MainCard : KeyTakesCard}
                        </div>
                        <div className="flex flex-col gap-5 lg:w-[calc(50%-30px)]">
                            {isEven ? KeyTakesCard : MainCard}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default SectionTimeline