import type { AvailableLanguages } from "@/components/assets/data";

export interface PortfolioItem {
    title: string;
    subtitle: string;
    mission: string;
    vision: string;
    categories: PortfolioCategory[];
}

export interface PortfolioCategory {
    name: string;
    subtitle: string;
    items: PortfolioItemCard[];
}

export interface DescriptionBlock {
    text: string;
    style: "quote" | "bullet" | "none";
}

export interface MoreInfoImage {
    src: string;
    captionTitle?: string;
    captionBullets: string[];
}

export interface MoreInfoDetail {
    images: MoreInfoImage[];
}

export interface PortfolioItemCard {
    title: string;
    subtitle?: string;
    image: string;
    direction: "l2r" | "r2l";
    button?: {
        text: string;
        link: string;
    };
    buttons?: {
        text: string;
        link: string;
    }[];
    infoBullets: string[];
    moreInfoDetails?: MoreInfoDetail[];
}

export const portfolioData: Record<string, Record<AvailableLanguages, PortfolioItem>> = {
    "botketing-crm": {
        en: {
            title: "Botketing",
            subtitle: "High-scalable vertical SaaS, Whitelabel CRM Solution",
            mission: "To empower businesses with intelligent, scalable automation tools that transform customer interactions into growth opportunities without technical complexity.",
            vision: "A world where every business, regardless of size, has access to enterprise-grade CRM capabilities that adapt to their unique needs and scale with their ambitions.",
            categories: [
                {
                    name: "Features",
                    subtitle: "Core capabilities designed for seamless automation and efficiency",
                    items: [
                        {
                            direction: "l2r",
                            title: "Horizontal Features",
                            subtitle: "Core automation and collaboration tools",
                            infoBullets: [
                                "Workflow Automation, Customer Management, Scheduling and Tickets in one platform.",
                                "Designed to keep teams aligned with automated follow-ups and shared customer data.",
                                "Built for rapid execution with low setup overhead and maximum visibility."
                            ],
                            moreInfoDetails: [
                                {
                                    images: [
                                        {
                                            src: `/portfolio-cosas/botketing/Add%20a%20heading%20(29).png`,
                                            captionTitle: "Workflow Automation",
                                            captionBullets: [
                                                "Visual workflow builder for marketing, sales, and service automation.",
                                                "Automates follow-up messages and appointment reminders without coding.",
                                                "Supports conditional branches, lead scoring, and scheduled triggers."
                                            ]
                                        },
                                        {
                                            src: `/portfolio-cosas/botketing/Add%20a%20heading%20(30).png`,
                                            captionTitle: "Customer Management",
                                            captionBullets: [
                                                "Unified customer inbox for WhatsApp, Instagram, and email conversations.",
                                                "Automatic profile enrichment using chat and form data.",
                                                "Tags and segments help teams identify hot leads and returning clients."
                                            ]
                                        },
                                        {
                                            src: `/portfolio-cosas/botketing/Add%20a%20heading%20(32).png`,
                                            captionTitle: "Scheduling",
                                            captionBullets: [
                                                "Integrated calendar for bookings, confirmations, and reminders.",
                                                "Automated follow-ups reduce no-shows and improve retention.",
                                                "Works with multi-location teams and staff availability."
                                            ]
                                        },
                                        {
                                            src: `/portfolio-cosas/botketing/Add%20a%20heading%20(31).png`,
                                            captionTitle: "Ticket System",
                                            captionBullets: [
                                                "Converts conversations into tickets automatically.",
                                                "Tracks open requests, assignments, and response times.",
                                                "Supports escalation rules and status updates for better service."
                                            ]
                                        },
                                        {
                                            src: `/portfolio-cosas/botketing/Add%20a%20heading%20(33).png`,
                                            captionTitle: "Internal Communication",
                                            captionBullets: [
                                                "Private and shared channels for operations and marketing teams.",
                                                "Role-based access keeps sensitive workflows secure.",
                                                "Message threads and mention alerts help teams stay aligned."
                                            ]
                                        }
                                    ]
                                }
                            ],
                            image: `/portfolio-cosas/botketing/Add%20a%20heading%20(29).png`
                        },
                        {
                            direction: "r2l",
                            title: "Vertical Features",
                            subtitle: "Industry-specific module packages",
                            infoBullets: [
                                "Tailored modules for marketing, veterinary, and dental businesses.",
                                "Each module includes workflows, customer profiles, and reporting dashboards.",
                                "Designed to reduce manual setup and accelerate deployment for niche clients."
                            ],
                            moreInfoDetails: [
                                {
                                    images: [
                                        {
                                            src: `/portfolio-cosas/botketing/Add%20a%20heading%20(34).png`,
                                            captionTitle: "Specialized Modules",
                                            captionBullets: [
                                                "Three tailored module packages for marketing, veterinary, and dental businesses.",
                                                "Each module includes workflows, customer profiles, and reporting dashboards.",
                                                "Designed to reduce manual setup and accelerate deployment for niche clients."
                                            ]
                                        }
                                    ]
                                }
                            ],
                            image: `/portfolio-cosas/botketing/Add%20a%20heading%20(34).png`
                        }
                    ]
                },
                {
                    name: "Results",
                    subtitle: "Study cases for our platform",
                    items: [
                        {
                            direction: "r2l",
                            title: "In Development",
                            subtitle: "Paused development",
                            infoBullets: [
                                "Built independently with progress aligned to academic and freelance work.",
                                "Focused on delivering a scalable vertical CRM for service businesses.",
                                "Early prototypes already show strong interest from local marketing teams."
                            ],
                            image: `/portfolio-cosas/botketing/IMG_20250621_184627 (1).jpg`
                        }
                    ]
                }
            ],
        }
    },
    "early-days-discord-communities": {
        en: {
            title: "Early days Discord communities",
            subtitle: "I started there when I was 19 years old",
            mission: "To keep automated the servers that supported me when I started.",
            vision: "That the servers that trusted me would be secure.",
            categories: [
                {
                    name: "Documented Proof",
                    subtitle: "Proof and findings from the first Discord servers",
                    items: [
                        {
                            direction: "l2r",
                            title: "Discord bots",
                            subtitle: "AQUINO & Spreen",
                            infoBullets: [
                                "I managed automation and moderation in active Discord communities, progressing from user to admin.",
                                "In case of solicitation I've got contact with both the principal content creator, administrators, and direct manager of them. Whom can and will confirm those information."
                            ],
                            moreInfoDetails: [
                                {
                                    images: [
                                        {
                                            src: `/portfolio-cosas/early-discord-days/Screenshot 2026-05-06 194015.png`,
                                            captionTitle: "AQUINO Bots",
                                            captionBullets: [
                                                "I started in 2019 as a user.",
                                                "I progressed to moderator and then administrator.",
                                                "Out of boredom, I built a bot that two years later handled all moderation."
                                            ]
                                        },
                                        {
                                            src: `/portfolio-cosas/early-discord-days/Screenshot 2026-05-06 194116.png`,
                                            captionTitle: "Spreen Bots",
                                            captionBullets: [
                                                "I started to improve the existing bot in Spreen's Discord.",
                                                "I earned the manager's trust and was promoted to higher roles, but my priority was managing the bot.",
                                                "I left and provided them with a solid infrastructure."
                                            ]
                                        }
                                    ]
                                }
                            ],
                            image: `/portfolio-cosas/early-discord-days/Screenshot 2026-05-06 193840.png`
                        },
                        {
                            direction: "l2r",
                            title: "Github & YouTube",
                            subtitle: "Projects and public content",
                            infoBullets: [
                                "Repositories and videos documenting my Discord and bot work."
                            ],
                            buttons: [
                                {
                                    text: "GitHub",
                                    link: "https://github.com/Xertozer"
                                },
                                {
                                    text: "YouTube",
                                    link: "https://youtube.com/c/xertozer"
                                }
                            ],
                            image: `/portfolio-cosas/early-discord-days/imgdiscorddays.png`
                        }
                    ]
                }
            ]
        }
    },
    "agencia-marketing-2024": {
        en: {
            title: "Marketing Agency",
            subtitle: "A brief knowledge over clients",
            mission: "I planned to build a marketing agency; when the blackouts started in my country I began automating chat responses at 3am with chatbots, learning how to generate ads and manage businesses.",
            vision: "Later I focused my efforts on automation and productizing those learnings which eventually informed the creation of Botketing CRM.",
            categories: [
                {
                    "name": "Results",
                    "subtitle": "Selected outcomes from early marketing projects",
                    "items": [
                        {
                            direction: "l2r",
                            title: "Danny Kids Daycare",
                            subtitle: "Local Marketing Campaign",
                            infoBullets: [
                                "Digital marketing campaigns driving 50 inbound messages in 10 days.",
                                "21.43 USD ad spend produced an estimated 228.57 USD profit.",
                                "Five new clients converted with an average 50 USD return per client."
                            ],
                            moreInfoDetails: [
                                {
                                    images: [
                                        {
                                            src: `/portfolio-cosas/agencia-2024/Add%20a%20heading%20(26).png`,
                                            captionTitle: "Campaign snapshot",
                                            captionBullets: [
                                                "Shows the ad creative and the main conversion funnel.",
                                                "Highlights the budget-to-profit efficiency of the campaign."
                                            ]
                                        },
                                        {
                                            src: `/portfolio-cosas/agencia-2024/20240528_134936.jpg`,
                                            captionTitle: "Lead generation performance",
                                            captionBullets: [
                                                "50 messages received in 10 days from local parents.",
                                                "Early metrics show strong engagement from the target audience."
                                            ]
                                        }
                                    ]
                                }
                            ],
                            image: `/portfolio-cosas/agencia-2024/Add%20a%20heading%20(26).png`
                        },
                        {
                            direction: "l2r",
                            title: "Veterinaria Las Lomas",
                            subtitle: "Lead Generation | GoHighLevel",
                            infoBullets: [
                                "48 lead results at an average cost of 3.27 USD per result.",
                                "20 appointment requests captured through chat automation.",
                                "Projected revenue of 1,000 USD from new client bookings."
                            ],
                            moreInfoDetails: [
                                {
                                    images: [
                                        {
                                            src: `/portfolio-cosas/agencia-2024/Add%20a%20heading%20(25).png`,
                                            captionTitle: "Appointment funnel",
                                            captionBullets: [
                                                "A lead enters through an ad and is guided to a booking page.",
                                                "Confirmed appointments are captured automatically in the CRM."
                                            ]
                                        }
                                    ]
                                }
                            ],
                            image: `/portfolio-cosas/agencia-2024/Add%20a%20heading%20(25).png`
                        }
                    ]
                },

                {
                    name: "Background",
                    subtitle: "Early story and context",
                    items: [
                        {
                            direction: "l2r",
                            title: "Early Days",
                            subtitle: "Age 17 — Blackouts and experiments",
                            infoBullets: [
                                "Started the agency amid frequent power outages and limited infrastructure.",
                                "Used chatbots and automation to keep campaigns running overnight.",
                                "Learned how to build resilient marketing workflows for local businesses."
                            ],
                            image: `/portfolio-cosas/agencia-2024/20240528_134936.jpg`
                        }
                    ]
                }
            ]
        }
    }
};

export const getPortfolioItem = (id: string, lang: AvailableLanguages = 'en'): PortfolioItem | null => {
    return portfolioData[id]?.[lang] || null;
};
