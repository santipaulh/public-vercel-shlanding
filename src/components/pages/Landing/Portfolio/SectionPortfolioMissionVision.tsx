"use client"

import { Component } from "../Home/Home";

interface SectionPortfolioMissionVisionProps {
    mission: string;
    vision: string;
}

const SectionPortfolioMissionVision = ({ mission, vision }: SectionPortfolioMissionVisionProps) => {
    return (
        <div className="flex flex-col gap-6 w-full lg:flex-row lg:items-stretch">
            <Component.Card backgroundColor="1" className="flex-1 w-full lg:w-auto">
                <div className="flex flex-col gap-4 h-full">
                    <Component.Text fontWeight="600" textSize="24px" color="3">
                        Our Mission
                    </Component.Text>
                    <Component.Text fontWeight="400" textSize="15px" color="2">
                        {mission}
                    </Component.Text>
                </div>
            </Component.Card>

            <Component.Card backgroundColor="1" className="flex-1 w-full lg:w-auto">
                <div className="flex flex-col gap-4 h-full">
                    <Component.Text fontWeight="600" textSize="24px" color="3">
                        Our Vision
                    </Component.Text>
                    <Component.Text fontWeight="400" textSize="15px" color="2">
                        {vision}
                    </Component.Text>
                </div>
            </Component.Card>
        </div>
    );
};

export default SectionPortfolioMissionVision;
