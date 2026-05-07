"use client"

import { useState } from "react";
import { Component } from "../Home/Home";
import type {
    PortfolioCategory,
    PortfolioItemCard,
    DescriptionBlock
} from "./portfolioData";

interface SectionPortfolioItemsProps {
    categories: PortfolioCategory[];
}

const SectionPortfolioItems = ({ categories }: SectionPortfolioItemsProps) => {
    const [selectedItem, setSelectedItem] = useState<PortfolioItemCard | null>(null);

    const closeModal = () => setSelectedItem(null);

    const renderInfoBullets = (bullets: string[]) => (
        <div className="flex flex-col gap-3">
            {bullets.map((text, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                    <span className="text-[var(--homepage-color-2)] mt-1">•</span>
                    <Component.Text fontWeight="400" textSize="14px" color="2">
                        {text}
                    </Component.Text>
                </div>
            ))}
        </div>
    );

    const renderDescriptionBlocks = (description: DescriptionBlock[]) => (
        <div className="flex flex-col gap-3">
            {description.map((block, idx) => {
                if (block.style === "bullet") {
                    return (
                        <div key={idx} className="flex gap-3 items-start">
                            <span className="text-[var(--homepage-color-2)] mt-1">•</span>
                            <Component.Text fontWeight="400" textSize="14px" color="2">
                                {block.text}
                            </Component.Text>
                        </div>
                    );
                }

                if (block.style === "quote") {
                    return (
                        <Component.Text key={idx} fontWeight="400" textSize="14px" color="2" style="quote">
                            {block.text}
                        </Component.Text>
                    );
                }

                return (
                    <Component.Text key={idx} fontWeight="400" textSize="14px" color="2">
                        {block.text}
                    </Component.Text>
                );
            })}
        </div>
    );

    const renderModal = () => {
        if (!selectedItem) {
            return null;
        }

        return (
            <div className="fixed inset-0 z-50 overflow-auto bg-black/50 p-6">
                <div className="relative mx-auto w-full max-w-[1100px] max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl">
                    <Component.Card backgroundColor="1" className="max-h-[90vh] overflow-y-auto p-8">
                        <button
                            onClick={closeModal}
                            className="absolute right-4 top-4 text-[var(--homepage-color-2)] rounded-full border border-[var(--homepage-color-2)] px-3 py-1 text-sm font-semibold hover:bg-[var(--homepage-color-2)] hover:text-white transition-all"
                        >
                            Close
                        </button>

                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-3">
                                <Component.Text fontWeight="700" textSize="28px" color="2">
                                    {selectedItem.title}
                                </Component.Text>
                                {selectedItem.subtitle && (
                                    <Component.Text fontWeight="500" textSize="16px" color="2">
                                        {selectedItem.subtitle}
                                    </Component.Text>
                                )}
                                {renderInfoBullets(selectedItem.infoBullets)}
                            </div>

                            {selectedItem.moreInfoDetails?.map((detail, detailIdx) => (
                                <div key={`detail-modal-${detailIdx}`} className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-6">
                                        {detail.images.map((image, imageIdx) => (
                                            <Component.Card
                                                key={`image-${imageIdx}`}
                                                backgroundColor="1"
                                                border={{ showing: ["left"], color: "2" }}
                                                className="flex flex-col gap-6 overflow-hidden rounded-3xl shadow-lg lg:flex-row"
                                            >
                                                <div className="lg:w-1/2">
                                                    <img
                                                        src={image.src}
                                                        alt={image.captionTitle ?? `${selectedItem.title} image ${imageIdx + 1}`}
                                                        className="w-full h-[280px] object-cover lg:h-full"
                                                    />
                                                </div>
                                                <div className="flex-1 flex flex-col gap-4 p-6">
                                                    {image.captionTitle && (
                                                        <Component.Text fontWeight="600" textSize="16px" color="2">
                                                            {image.captionTitle}
                                                        </Component.Text>
                                                    )}
                                                    <div className="flex flex-col gap-2">
                                                        {image.captionBullets.map((caption, captionIdx) => (
                                                            <div key={`caption-${captionIdx}`} className="flex gap-3 items-start">
                                                                <span className="text-[var(--homepage-color-2)] mt-1">•</span>
                                                                <Component.Text fontWeight="400" textSize="14px" color="2">
                                                                    {caption}
                                                                </Component.Text>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Component.Card>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Component.Card>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="flex flex-col gap-24 w-full">
                {categories.map((category, idx) => (
                    <div key={`12321132213-${idx}`} className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col">
                            <Component.Text fontWeight="600" textSize="30px" color="2">
                                {category.name}
                            </Component.Text>
                            <Component.Text fontWeight="400" textSize="16px" color="2" style="quote">
                                {category.subtitle}
                            </Component.Text>
                        </div>

                        <div className="flex flex-col gap-5">
                            {category.items.map((item, idx) => {
                                const hasMoreInfo = item.moreInfoDetails && item.moreInfoDetails.length > 0;

                                return (
                                    <Component.Card
                                        key={`1231278213-${idx}`}
                                        backgroundColor="1"
                                        border={{ showing: ["left"], color: "2" }}
                                        className="flex flex-col gap-6 w-full py-8"
                                    >
                                        <div className="flex flex-col gap-6 lg:flex-row">
                                            <div className="flex-shrink-0 lg:w-1/2">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-[350px] rounded-lg object-cover"
                                                />
                                            </div>

                                            <div className="flex-1 flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Component.Text fontWeight="600" textSize="24px" color="2">
                                                        {item.title}
                                                    </Component.Text>
                                                    {item.subtitle && (
                                                        <Component.Text fontWeight="600" textSize="12px" color="2">
                                                            {item.subtitle}
                                                        </Component.Text>
                                                    )}
                                                </div>

                                                {renderInfoBullets(item.infoBullets)}

                                                <div className="pt-4 flex flex-wrap gap-3">
                                                    {hasMoreInfo && (
                                                        <button
                                                            onClick={() => setSelectedItem(item)}
                                                            className="text-white bg-[var(--homepage-color-1)] px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                                                        >
                                                            See more
                                                        </button>
                                                    )}
                                                    {item.buttons?.map((button, buttonIdx) => (
                                                        <a
                                                            key={`item-button-${buttonIdx}`}
                                                            href={button.link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-[var(--homepage-color-2)] border border-[var(--homepage-color-2)] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[var(--homepage-color-2)] hover:text-white transition-all"
                                                        >
                                                            {button.text}
                                                        </a>
                                                    ))}
                                                    {item.button && (
                                                        <a
                                                            href={item.button.link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-[var(--homepage-color-2)] border border-[var(--homepage-color-2)] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[var(--homepage-color-2)] hover:text-white transition-all"
                                                        >
                                                            {item.button.text}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Component.Card>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {renderModal()}
        </>
    );
};

export default SectionPortfolioItems;
