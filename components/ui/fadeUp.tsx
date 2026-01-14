"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeUp({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }} // Start
            whileInView={{ opacity: 1, y: 0 }} // End
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}