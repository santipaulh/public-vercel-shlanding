"use client"

import { Component } from "./Home";
import homeLanguage from "./Home.language.json";
import dynamic from "next/dynamic";
import type { AvailableLanguages } from "@/components/assets/data";

interface SectionSkillsProps {
    lang: AvailableLanguages;
}

const SectionSkills = ({ lang }: SectionSkillsProps) => {
    const skills = homeLanguage[lang].skills;

    return (
        <Component.Card backgroundColor="2">
            <div className="w-full flex flex-wrap justify-between gap-8 p-4">
                {skills.map((group, idx) => (
                    <div key={`123312123312-${idx}`} className="flex-1 min-w-[220px] max-w-[260px]">
                        <Component.Text color="1" textSize="18px" fontWeight="600" shadow>
                            {group.category}
                        </Component.Text>
                        <ul className="flex flex-col gap-2 mt-2">
                            {group.items.map((skill, sidx) => (
                                <li key={`12312312321-${sidx}`} className="flex flex-row items-center gap-2 text-[16px]">
                                    {/* <FontAwesomeIcon icon={skill.icon} className="text-white/80" /> */}
                                    <Component.Text color="1" style="bullet-point" textSize="16px" fontWeight="400">
                                        {skill.name}
                                    </Component.Text>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Component.Card>
    );
};

export default SectionSkills