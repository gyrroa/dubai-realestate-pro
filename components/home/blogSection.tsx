import { ArrowRight } from "lucide-react";
import BlogCard from "../ui/blogCard"
import { Button } from "../ui/button";

export default function BlogSection() {
    return (
        <section className="relative flex flex-col text-center items-center pt-32.5 pb-17.5 px-[151.5px]">
            <h1 className="absolute flex flex-col left-1/2 -translate-x-1/2 top-16 font-serif italic font-bold leading-16 z-50">
                <span className="text-[64px] tracking-[-3.84px] leading-16.75">
                    Discover the
                </span>
                <span className="text-8xl text-accent -mt-5.5 tracking-[-5.76px]">
                    Dubai Lifestyle
                </span>
            </h1>

            {/* Blog Card Container */}
            <div className="flex w-full gap-7.75 justify-center">
                <BlogCard title="🏙️ 2026 City Guide: Must-Visit Landmarks" description="Discover the must-visit attractions and world-record sights defining the city skyline." />
                <BlogCard title="🏙️ 2026 City Guide: Must-Visit Landmarks" description="Discover the must-visit attractions and world-record sights defining the city skyline." />
                <BlogCard title="🏙️ 2026 City Guide: Must-Visit Landmarks" description="Discover the must-visit attractions and world-record sights defining the city skyline." />
                <BlogCard title="🏙️ 2026 City Guide: Must-Visit Landmarks" description="Discover the must-visit attractions and world-record sights defining the city skyline." />
            </div>

            <Button variant={"cta2"} size={"cta2"} className="mt-8">
                View More
                <ArrowRight className="size-5" />
            </Button>
        </section>
    );
}
