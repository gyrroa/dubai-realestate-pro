import CurvedCarousel from "../ui/carousel";
import DevBtnGroup from "../ui/devBtnGroup";

export default function HeroSection() {

    return (
        <section className="text-center">
            <h1 className="text-6xl font-serif italic text-black font-bold leading-6 tracking-[-3.84px]">
                <span className="text-accent">
                    Dubai’s Top
                </span> Real Estate Developers
            </h1>
            <p className="text-2xl my-6 leading-6 tracking-[-1.44px]">
                Curating the best of <span className="font-semibold">Dubai's <span className="text-accent">skyline</span></span>, just for you.
            </p>
            {/* Carousel */}
            <CurvedCarousel />
            {/* Banner */}
            
            {/* Developer Button Group */}
            <DevBtnGroup />
        </section>
    );
}
