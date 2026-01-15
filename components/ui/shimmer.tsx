import { cn } from "@/lib/utils";

export function GoldSkeleton({ className }: { className?: string }) {
    return (
        <div className={cn("relative overflow-hidden bg-highlight/7.5", className)}>
            <div className="absolute inset-0 z-10 animate-gold-shimmer">
                <div className="h-full w-1/2 bg-linear-to-r from-transparent via-highlight/15 to-transparent skew-x-[-20deg]" />
            </div>
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(239,203,104,0.1)]" />
        </div>
    );
}