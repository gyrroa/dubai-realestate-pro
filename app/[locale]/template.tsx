"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsChanging(true);

    const timer = setTimeout(() => {
      setIsChanging(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isChanging && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-200 pointer-events-auto"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      {/* This renders your actual page content */}
      {children}
    </>
  );
}