"use client"

import AboutSection from "@/components/developer/aboutSection";
import Projects from "@/components/developer/property/projects";
import ProperySection from "@/components/developer/propertySection";
import { useParams, useRouter } from "next/navigation";

export default function Developer() {
    // const t = useTranslations('503');
    // const router = useRouter();
    const params = useParams();
    const slug = params.developer as string;
    return (
        <>
            <AboutSection slug={slug} />
            <ProperySection >
                <Projects devSlug={slug} />
            </ProperySection>
        </>
    );
}