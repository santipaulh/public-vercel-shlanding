"use client"

import { Component } from "./Home";
import homeLanguage from "./Home.language.json";
import type { AvailableLanguages } from "@/components/assets/data";

interface TextPart {
    text: string;
    bold?: boolean;
}

interface ResumeSection {
    title: string | null;
    paragraphs: TextPart[][];
}

interface SectionResumeProps {
    lang: AvailableLanguages;
}

const SectionResume = ({ lang = "en" }: SectionResumeProps) => {
    const data = homeLanguage[lang].resume;

    const renderParagraph = (paragraph: TextPart[], index: number) => (
        <Component.Text
            key={`paragraph-${index}`}
            color="2"
            textSize="15px"
            fontWeight="400"
        >
            {paragraph.map((part, idx) =>
                part.bold ? (
                    <b key={`bold-${idx}`}>{part.text}</b>
                ) : (
                    <span key={`text-${idx}`}>{part.text}</span>
                )
            )}
        </Component.Text>
    );

    return (
        <Component.Card backgroundColor="1" className="!p-10">
            {data.sections.map((section: ResumeSection, sectionIndex: number) => (
                <div key={`section-${sectionIndex}`}>
                    <div className="flex flex-col justify-center items-center gap-4">
                        {section.title && (
                            <Component.Text
                                color="2"
                                textSize="15px"
                                fontWeight="700"
                            >
                                {section.title}
                            </Component.Text>
                        )}

                        <div className="flex flex-col gap-4 text-center">
                            {section.paragraphs.map((paragraph, paragraphIndex) =>
                                renderParagraph(paragraph, paragraphIndex)
                            )}
                        </div>
                    </div>

                    {sectionIndex !== data.sections.length - 1 && (
                        <div
                            className="my-[23px]"
                            style={{
                                borderTop: "1px solid rgba(160, 160, 160, .2)"
                            }}
                        />
                    )}
                </div>
            ))}

            <div
                className="my-[23px]"
                style={{
                    borderTop: "1px solid rgba(160, 160, 160, .2)"
                }}
            />

            <div className="flex flex-row justify-center items-center">
                <Component.ButtonRedirect
                    src={data.cvUrl}
                    text={data.cvText}
                />
            </div>
        </Component.Card>
    );
};

export default SectionResume;