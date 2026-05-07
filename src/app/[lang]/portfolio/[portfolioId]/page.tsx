import PortfolioPage from "@/components/pages/Landing/Portfolio/Portfolio";
import { use } from "react";

export default function Portfolio({ params }: {
    params: Promise<{ lang: string; portfolioId: string }>
}) {
    const { portfolioId } = use(params)
    return <PortfolioPage portfolioId={portfolioId} lang="en" />
}
