import { CommunityIcon, LocationIcon, UnitIcon } from "@/components/developer/icons";
import { useEffect, useRef, useState, ReactNode } from "react";
import { FilterDropdown } from "./filterDropdown";

export default function PropertyFilter() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Test Data Constants
    const communities = [
        { id: "comm-al-jaddaf", label: "Al Jaddaf & Dubai Healthcare City, Dubai" },
        { id: "comm-azizi-milan", label: "Azizi Milan, Dubai" },
        { id: "comm-jebel-ali", label: "Jebel Ali, Dubai" },
    ];

    const locations = [
        { id: "loc-al-jaddaf", label: "Al Jaddaf, Dubai" },
        { id: "loc-arjan", label: "Arjan, Dubai" },
        { id: "loc-downtown-dubai", label: "Downtown Dubai, Dubai" },
        { id: "loc-dubai-science-park", label: "Dubai Science Park, Dubai" },
        { id: "loc-jumeirah-village-triangle", label: "Jumeirah Village Triangle, Dubai" },
        { id: "loc-majan", label: "Majan, Dubai" },
    ];

    const unitType = [
        { id: "bed-studio", label: "Studio" },
        { id: "bed-1", label: "1 Bedroom" },
        { id: "bed-2", label: "2 Bedrooms" },
        { id: "bed-3", label: "3 Bedrooms" },
        { id: "bed-4", label: "4 Bedrooms" },
        { id: "bed-5-plus", label: "5+ Bedrooms" },
        { id: "bed-penthouse", label: "Penthouse" },
    ];

    // Selection Logic
    const [selected, setSelected] = useState<string[]>([]);
    const toggleSelection = (id: string) => {
        setSelected((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    };

    // Toggle Logic
    const toggleDropdown = (key: string) => {
        setActiveDropdown((prev) => (prev === key ? null : key));
    };

    // Click Outside Listener
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        if (activeDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeDropdown]);

    return (
        <div ref={containerRef} className="gap-x-2.5 flex items-center justify-center">
            <h2 className="text-label-base font-medium text-accent whitespace-nowrap">Filter by:</h2>

            <FilterDropdown
                label="Community"
                icon={<CommunityIcon />}
                options={communities}
                selected={selected}
                isOpen={activeDropdown === "community"}
                onToggleOpen={() => toggleDropdown("community")}
                onSelect={toggleSelection}
            />

            <FilterDropdown
                label="Location"
                icon={<LocationIcon />}
                options={locations}
                selected={selected}
                isOpen={activeDropdown === "location"}
                onToggleOpen={() => toggleDropdown("location")}
                onSelect={toggleSelection}
            />

            <FilterDropdown
                label="Unit Type"
                icon={<UnitIcon />}
                options={unitType}
                selected={selected}
                isOpen={activeDropdown === "unit"}
                onToggleOpen={() => toggleDropdown("unit")}
                onSelect={toggleSelection}
            />
        </div>
    );
}


