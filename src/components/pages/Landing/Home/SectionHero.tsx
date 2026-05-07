"use client"

import styles from "./Home.module.css";
import dynamic from "next/dynamic";
import type { AvailableLanguages } from "@/components/assets/data";
import { Component } from "./Home";
import homeLanguage from "./Home.language.json";
import {
    faBirthdayCake,
    faBusinessTime,
    faEnvelope,
    faGlobeAmericas,
    faPhone,
} from "@fortawesome/free-solid-svg-icons"
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons"
import Image from "next/image";

const FontAwesomeIcon = dynamic(
    () => import("@fortawesome/react-fontawesome").then(x => x.FontAwesomeIcon),
    { ssr: !!false }
)

interface SectionHeroProps {
    lang: AvailableLanguages;
}

const SectionHero = ({ lang }: SectionHeroProps) => {
    const data = homeLanguage[lang].hero;
    
    const iconMap: Record<string, any> = {
        faBirthdayCake: faBirthdayCake,
        faBusinessTime: faBusinessTime,
        faPhone: faPhone,
        faEnvelope: faEnvelope,
        faGlobeAmericas: faGlobeAmericas
    };

    return (
        <div
            style={{
                backgroundColor: "var(--homepage-color-1)",
                borderTopLeftRadius: "var(--rules-page-dashboard-roounded_border_corners-1)",
                borderBottomLeftRadius: "var(--rules-page-dashboard-roounded_border_corners-1)"
            }}
            className={`${styles["card"]} min-h-[420px] lg:min-h-[var(--homepage-firstsection-height)] relative flex flex-1 flex-col lg:flex-row`}
        >
            <div className="flex flex-col flex-1 p-6 md:p-10">
                <Component.Text color="1" textSize="28px" fontWeight="700" shadow>
                    {data.name}
                </Component.Text>
                <div style={{ marginTop: "-8px" }}>
                    <Component.Text color="1" textSize="18px" fontWeight="400" shadow>
                        {data.title}
                    </Component.Text>
                </div>
                <div className="my-[30px] overflow-y-auto flex flex-col gap-2">
                    {data.items.map((x, idx) => (
                        <div key={`dsqweeqweqwqewqeqwewq-${idx}`} className={`flex flex-row gap-2 items-center`}>
                            <FontAwesomeIcon
                                width={18}
                                height={18}
                                icon={iconMap[x.icon]}
                                className={`${styles["text-text-1"]} text-[15px]`}
                            />

                            <Component.Text color="1" textSize="15px" fontWeight="400">{x.text}</Component.Text>
                        </div>
                    ))}
                </div>
                <div className="mt-auto flex flex-row gap-[10px]">
                    <div className="flex flex-row gap-[10px]">
                        {[
                            {
                                icon: faWhatsapp,
                                src: "https://wa.me/+593995519509",
                                hexColor: "#25D366"
                            },
                            {
                                icon: faInstagram,
                                src: "https://instagram.com/santipaulh",
                                hexColor: "#E1306C"
                            },
                            {
                                icon: faFacebookF,
                                src: "https://facebook.com/paulherrera",
                                hexColor: "#1877F2 "
                            },
                            {
                                icon: faLinkedinIn,
                                src: "http://www.linkedin.com/in/santipaulh",
                                hexColor: "#0A66C2"
                            }
                        ].map((x, idx) => (
                            <a
                                key={`${idx}123109873298132`}
                                className={`p-[10px] flex flex-row justify-center items-center rounded-full ${styles["shadow-addon"]}`}
                                style={{
                                    backgroundColor: x.hexColor
                                }}
                                href={x.src}
                            >
                                <FontAwesomeIcon
                                    icon={x.icon}
                                    height={15}
                                    width={15}
                                    className={`${styles["text-text-1"]} text-[15px] font-black`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative hidden lg:block w-full lg:w-auto">
                <div
                    className={`absolute bg-white ${styles["profile"]}`}
                />
                <img
                    style={{
                        borderTopRightRadius: "var(--rules-page-dashboard-roounded_border_corners-1)",
                        borderBottomRightRadius: "var(--rules-page-dashboard-roounded_border_corners-1)"
                    }}
                    src={"/cv-hero-pfp.jpg"}
                    alt="Mi cara"
                    className="self-end cover w-full h-[320px] md:h-[420px] lg:h-[var(--homepage-firstsection-height)]"
                />
            </div>
        </div>
    )
}

export default SectionHero