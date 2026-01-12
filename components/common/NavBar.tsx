"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <nav className="w-full py-10">
            <div className="mx-auto flex justify-around items-center">
                <Link href="/" passHref>
                    <Button variant="nav">
                        Home
                    </Button>
                </Link>
                <Link href="/developers" passHref>
                    <Button variant="nav">
                        Developers
                    </Button>
                </Link>
                <div className="flex px-4 py-2 items-center gap-1.5 select-none">
                    <Image width={60} height={90} alt="" src="/logo.png" className="w-15 h-22.5" />
                    <div className="text-start font-bold flex flex-col font-serif gap-1">
                        <span className="leading-5.75 text-4xl tracking-[-2.16px]">Dubai</span>
                        <span className="text-2xl text-accent italic font-serif tracking-[-1.44px] leading-5.75 ">
                            REAL ESTATE PRO
                        </span>
                    </div>
                </div>
                <Link href="/blogs" passHref>
                    <Button variant="nav">
                        Blogs
                    </Button>
                </Link>
                <Button variant="cta1" size={"cta1"} onClick={scrollToContact}>
                    Contact Us
                    <ArrowRight className="size-5" />
                </Button>
            </div>
        </nav>
    );
}
