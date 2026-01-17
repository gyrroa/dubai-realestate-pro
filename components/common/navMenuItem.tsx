import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";
import { navigation } from "@/messages/constants/data";

type NavItemProps = {
    title: string;
    config: typeof navigation[number];
    isActive: boolean;
    isDeveloperOpen?: boolean;
    onClick: (e: React.MouseEvent, config: typeof navigation[number]) => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    className?: string;
    children?: React.ReactNode;
};

export const NavItem = ({ title, config, isActive, isDeveloperOpen, onClick, onMouseEnter, onMouseLeave, className, children }: NavItemProps) => {
    const isContact = config.type === "cta";
    const isDeveloper = config.type === "nav2";

    return (
        <div
            className="relative group/nav"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Button
                asChild
                variant={isContact ? "cta1" : "nav"}
                size={isContact ? "cta1" : "flat"}
                className={cn(
                    "group/nav",
                    isContact ? "text-title-30" : "",
                    !isContact && isActive && "[color:var(--accent)] font-bold",
                    isDeveloper && isDeveloperOpen && "[color:var(--accent)] font-bold",
                    className
                )}
            >
                <Link href={config.href} onClick={(e) => onClick(e, config)}>
                    {title}
                    {!isContact ? (
                        <hr className={cn(
                            "rounded-full bottom-0 w-0 opacity-0 absolute transition-all duration-500",
                            // Desktop hover effects (handled by group/nav)
                            "group-active/nav:opacity-100 group-active/nav:h-1",
                            "group-hover/nav:opacity-100 h-0.5 bg-foreground group-hover/nav:bg-accent group-hover/nav:w-full",
                            // Active states
                            isActive && "h-1 w-full bg-accent opacity-100",
                            isDeveloper && isDeveloperOpen && "h-1 w-full bg-accent opacity-100"
                        )} />
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="w-5 h-3.5 ml-2 rtl:rotate-180">
                            <path d="M19.5645 9.59241L12.4176 16.7393C11.8816 17.3199 10.9436 17.3199 10.4076 16.7393C9.82691 16.2032 9.82691 15.2652 10.4076 14.7292L15.0977 9.99442H1.42937C0.625349 9.99442 0 9.36907 0 8.56505C0 7.8057 0.625349 7.13568 1.42937 7.13568H15.0977L10.4076 2.44556C9.82691 1.90955 9.82691 0.971524 10.4076 0.435511C10.9436 -0.14517 11.8816 -0.14517 12.4176 0.435511L19.5645 7.58236C20.1452 8.11837 20.1452 9.05639 19.5645 9.59241Z" fill="#231D20" />
                        </svg>
                    )}
                </Link>
            </Button>
            {children}
        </div>
    );
};