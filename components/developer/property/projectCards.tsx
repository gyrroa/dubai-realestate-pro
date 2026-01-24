"use client";

import { cn } from "@/lib/utils";
import { UnitIcon } from "../icons";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";


// interface FilterDropdownProps {
//     label: string;
//     icon: ReactNode;
//     options: { id: string; label: string }[];
//     selected: string[];
//     isOpen: boolean;
//     onToggleOpen: () => void;
//     onSelect: (id: string) => void;
// }

// export function FilterDropdown({ label, icon, options, selected, isOpen, onToggleOpen, onSelect }: FilterDropdownProps) {

interface ProjectCardProps {
    name: string;
    location: string;
    price?: string;
    unitType: string[];
    slug: string;
}

export default function ProjectCard({ name, location, price, unitType, slug }: ProjectCardProps) {
    const formattedUnitType = unitType.slice(0, 3).join(" | ")
    return (
        <Button
            asChild
            size={"flat"}
            className={cn(
                "w-75 h-100",
                "shadow-[0_0_10px_0_rgba(0,0,0,0.25)] hover:shadow-[0_0_20px_0_rgba(0,0,0,0.45)]",
                "hover:-translate-y-1 duration-500",
                "flex flex-col flex-1 relative text-start items-center border-2 border-accent rounded-[20px] overflow-clip justify-between"
            )}>
            {/* <Link href={`/${slug}`}> */}
            <Link href={`/503`}>
                <div className="relative w-full h-full bg-foreground" >
                    {price &&
                        <div className={cn(
                            "absolute bottom-3 right-3",
                            "bg-glow/80 backdrop-blur-[5px]",
                            "border-2 border-accent rounded-[20px]",
                            "gap-0.75 px-2.5 py-1.25 flex items-center",
                        )}>
                            <p className="text-foreground text-desc-xs font-light">Starts at</p>
                            <p className="text-[15px] font-semibold text-accent">{price}</p>
                        </div>
                    }
                </div>
                {/* Description */}
                <div className="p-5 bg-glow gap-1.25 w-full self-baseline">
                    {/* Name */}
                    <p className="font-semibold text-title-2xl">{name}</p>
                    {/* Address */}
                    <p className="text-desc-xs text-accent">{location}</p>
                    <hr className="w-full h-px border-0 bg-accent/20 my-1.25" />
                    <div className="flex gap-2 items-center">
                        <UnitIcon />
                        <p className="text-desc-xs font-normal">{formattedUnitType}</p>
                    </div>
                </div>
            </Link>
        </Button >
    );
}