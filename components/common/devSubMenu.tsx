"use client"

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { navigation } from "@/messages/constants/data";

interface DeveloperItem {
    id: number;
    title: string;
    description: string;
}

interface DeveloperSubMenuProps {
    isOpen: boolean;
    isAtTop: boolean;
    data: DeveloperItem[];
    onClose: () => void;
}

export function DeveloperSubMenu({ isOpen, isAtTop, data, onClose }: DeveloperSubMenuProps) {
    return (
        <div className={cn(
            "cursor-default",
            "text-foreground font-normal absolute ",
            "top-full right-0 xl:right-auto xl:left-1/2 xl:-translate-x-1/2 text-end xl:text-start",
            !isOpen && "pointer-events-none "
        )}>
            <div
                className={cn(
                    !isAtTop ? "pt-15 xl:mt-15" : "pt-5 xl:mt-5",
                    "p-4 transition-all duration-500 backdrop-blur-[10px] rounded-bl-[30px] xl:rounded-[30px] bg-glow/80 border-b-2 border-l-2 xl:border-2 border-glow",
                    !isOpen && "opacity-0 -translate-y-[150%] xl:translate-0",
                )}
            >
                <div className="grid grid-flow-row xl:grid-flow-col xl:grid-rows-5 gap-x-1">
                    {data.map((item) => {
                        const href = navigation[item.id].href
                        return (
                            <Link
                                key={item.title}
                                href={href}
                                onClick={onClose}
                                className="group/sub flex flex-col w-full py-2 px-3 gap-1 cursor-pointer"
                            >
                                <h2 className="transition-all duration-500 relative text-desc-3xl xl:text-title-20 xl:font-semibold tracking-[-1.2px] w-full xl:w-fit group-hover/sub:text-accent whitespace-nowrap">
                                    {item.title}
                                </h2>
                                <p className="transition-all hidden duration-500 text-label-base font-light tracking-[-0.96px] w-70.5 xl:line-clamp-2 whitespace-break-spaces group-hover/sub:text-accent">
                                    {item.description}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}