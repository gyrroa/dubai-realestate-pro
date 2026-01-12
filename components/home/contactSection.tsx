import { ArrowRight, Mail } from "lucide-react";
import { Button } from "../ui/button";

export default function ContactSection() {
    return (
        <section id="contact" className="grid grid-cols-2 gap-15 mx-17 pb-12.5">
            {/* Contact Info */}
            <div className="relative flex flex-col justify-start items-center">
                {/* Title */}
                <h1 className="flex flex-col font-serif italic font-bold leading-16.75 z-50 tracking-[-6px] text-[100px] max-w-144.25 w-full">
                    <span className="text-start">
                        Ready to Find
                    </span>
                    <span className="text-end text-accent">
                        Your Gem?
                    </span>
                </h1>
                {/* Description */}
                <p className="mt-3.5 font-light text-xl text-center tracking-[-1px]">
                    The best properties in Dubai are often <span className="text-accent font-semibold">hidden</span>.
                    <br />
                    Tell us what you're looking for, and we'll <span className="font-semibold">start digging</span>!
                </p>
                {/* Map */}
                <div className="relative overflow-hidden border-2 border-accent h-75 w-full mt-9 rounded-3xl" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1073.4492412954023!2d55.27192006247905!3d25.1816822333047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69005edfb86d%3A0xac716db8130d8d12!2sBinghatti%20Skyrise!5e0!3m2!1sen!2sph!4v1768243016641!5m2!1sen!2sph" loading="lazy" className="w-full h-full" />
                </div >
                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-5 w-full mt-5">
                    <div className="flex gap-3 py-3.5 px-5 bg-glow h-full w-full rounded-[20px] border-2 border-accent" >
                        {/* Email Icon */}
                        <div className="rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.50)] p-3.5">
                            <Mail className="text-accent" />
                        </div>
                        {/* Email Info */}
                        <div>
                            <label className="font-semibold text-accent">Email <span className="text-foreground">Address</span></label>
                            <p className="font-light underline">dubairealtypro@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-3 py-3.5 px-5 bg-glow h-full w-full rounded-[20px] border-2 border-accent" >
                        {/* Whatsapp Icon */}
                        <div className="rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.50)] p-3.5">
                            <Mail className="text-accent" />
                        </div>
                        {/* WhatsApp Info */}
                        <div>
                            <label className="font-semibold text-accent">WhatsApp <span className="text-foreground">Number</span></label>
                            <p className="font-light underline">+63 912 345 6789</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="relative gap-5 flex flex-col bg-accent bg-[url(/home/contact/contactBackground.png)] bg-cover bg-no-repeat bg-center border-2 border-foreground rounded-4xl shadow-[0_0_20px_0_rgba(35,29,32,0.25)] p-10">
                <form className="flex flex-1 flex-col gap-5 tracking-[-0.8px] leading-6">
                    {/* Contact Name */}
                    <div className="flex gap-5">
                        <div className="flex gap-5 py-3.5 px-5 bg-glow whitespace-nowrap rounded-[20px] items-center border-2 border-foreground">
                            <label>First Name</label>
                            <input className="w-full border border-muted-border rounded-lg py-1.5 px-3.5" />
                        </div>
                        <div className="flex gap-5 py-3.5 px-5 bg-glow whitespace-nowrap rounded-[20px] items-center border-2 border-foreground">
                            <label>Last Name</label>
                            <input className="w-full border border-muted-border rounded-lg py-1.5 px-3.5" />
                        </div>
                    </div>
                    {/* Email Address */}
                    <div className="flex gap-5 py-3.5 px-5 bg-glow whitespace-nowrap rounded-[20px] items-center border-2 border-foreground">
                        <label>Email Address</label>
                        <input className="w-full border border-muted-border rounded-lg py-1.5 px-3.5" />
                    </div>
                    {/* WhatsApp Number */}
                    <div className="flex gap-5 py-3.5 px-5 bg-glow whitespace-nowrap rounded-[20px] items-center border-2 border-foreground">
                        <label>WhatsApp Number</label>
                        <input className="w-full border border-muted-border rounded-lg py-1.5 px-3.5" />
                    </div>
                    {/* Message */}
                    <div className="flex flex-1 flex-col gap-3 py-3.5 px-5 bg-glow whitespace-nowrap rounded-[20px] center border-2 border-foreground h-full">
                        <label>Message</label>
                        <textarea className="w-full border border-muted-border rounded-lg py-1.5 px-3.5 h-full" />
                    </div>
                </form>
                <Button variant={"cta1"} size={"cta1"} className="w-fit self-center text-2xl">Send Message <ArrowRight className="size-5" /></Button>
            </div>
        </section>
    );
}
