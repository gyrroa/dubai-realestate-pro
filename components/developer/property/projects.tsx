"use client";

import { cn } from "@/lib/utils";
import ProjectCard from "./projectCards";

export default function Projects({ devSlug }: { devSlug: string }) {
    return (
        <section className={cn(
            "grid grid-cols-3 gap-5 relative items-center pt-6"
        )}>

            <ProjectCard
                name="AZIZI FARISHTA II"
                location="Al Jaddaf & Dubai Healthcare City, Dubai"
                price="AED 819999"
                unitType={["1 Bedroom", "2 Bedroom"]}
                slug={`${devSlug}/Azizi-Farishta-II`}
            />
            <ProjectCard
                name="AZIZI FARISHTA II"
                location="Al Jaddaf & Dubai Healthcare City, Dubai"
                price="AED 819999"
                unitType={["1 Bedroom", "2 Bedroom"]}
                slug={`${devSlug}/Azizi-Farishta-II`}
            />
            <ProjectCard
                name="AZIZI FARISHTA II"
                location="Al Jaddaf & Dubai Healthcare City, Dubai"
                price="AED 819999"
                unitType={["1 Bedroom", "2 Bedroom"]}
                slug={`${devSlug}/Azizi-Farishta-II`}
            />
        </section>
    );
}