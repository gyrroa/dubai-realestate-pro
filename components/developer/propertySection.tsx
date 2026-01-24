"use client";

import { cn } from "@/lib/utils";
import PropertyFilter from "./property/filter";

export default function ProperySection({ children }: { children: React.ReactNode }) {
    return (
        <section className={cn(
            "py-12.5 px-10",
            "relative items-center text-center flex flex-col flex-1 min-h-screen justify-start"
        )}>
            {/* Header title */}
            <h1 className="text-title-64 font-serif italic font-bold tracking-[-3.84px]">
                <span className="text-accent">Property</span> Listings
            </h1>
            {/* Filters */}
            <PropertyFilter />
            {/* Body */}
            {children}
        </section>
    );
}