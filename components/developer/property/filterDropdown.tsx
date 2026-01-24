import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FilterDropdownProps {
    label: string;
    icon: ReactNode;
    options: { id: string; label: string }[];
    selected: string[];
    isOpen: boolean;
    onToggleOpen: () => void;
    onSelect: (id: string) => void;
}

export function FilterDropdown({ label, icon, options, selected, isOpen, onToggleOpen, onSelect }: FilterDropdownProps) {
    return (
        <div className="flex flex-col relative w-50">
            {/* Trigger Button */}
            <Button
                onClick={onToggleOpen}
                className="bg-glow py-2 px-3 rounded-lg shadow-[0_1px_2px_0_rgba(0,0,0,0.10)] justify-between items-center border border-[#E5E5E5]"
            >
                <div className="flex items-center gap-1.25">
                    {icon}
                    <p className="text-desc-14">{label}</p>
                </div>
                {/* Chevron Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`}
                >
                    <path d="M12 10L8 6L4 10" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Button>

            {/* Dropdown Menu */}
            <div
                className={cn(
                    "duration-500 absolute top-full left-0 mt-1 w-50 z-20", // Added z-20 to ensure it sits on top
                    "bg-glow p-1 rounded-lg shadow-[0_1px_2px_0_rgba(0,0,0,0.10)] border border-[#E5E5E5]",
                    "text-start flex flex-col gap-1 text-desc-14 leading-none",
                    isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
                )}
            >
                {options.map((item) => {
                    const isChecked = selected.includes(item.id);
                    return (
                        <button
                            key={item.id}
                            onClick={() => onSelect(item.id)}
                            className={cn(
                                isChecked && "bg-[#F5F5F5]",
                                "hover:bg-[#F5F5F5] duration-300 cursor-pointer px-2 py-1.5 rounded-md flex text-start items-center justify-between"
                            )}
                        >
                            <p>{item.label}</p>
                            {/* Check Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                className={cn("size-4 shrink-0 duration-300", isChecked ? "opacity-100" : "opacity-0")}
                            >
                                <path d="M13.3333 4L6.00001 11.3333L2.66667 8" stroke="#231D20" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}