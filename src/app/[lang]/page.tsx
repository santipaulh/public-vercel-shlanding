import HomePage from "@/components/pages/Landing/Home/Home";
import { use } from "react";

export default function Home({ params }: {
    params: Promise<{ lang: string }>
}) {
    return <HomePage lang={"en"} />
}
