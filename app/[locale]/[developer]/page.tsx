"use client"

import AboutSection from "@/components/developer/aboutSection";
import ProperySection from "@/components/developer/propertySection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Developer() {
    const t = useTranslations('503');
    const router = useRouter();
    return (
        <>
            <AboutSection />
            <ProperySection />
        </>
    );
}