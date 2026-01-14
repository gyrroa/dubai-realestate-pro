"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue
} from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRef, useEffect, useState } from "react";

export default function TextRibbon() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // Content, duplicated for infinite loop
  const t = useTranslations('Hero');
  const text = t('ribbon');
  const items = Array(100).fill(text);

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Measure Width
  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 4);
    }
  }, []);

  // Animation Loop
  useAnimationFrame((t, delta) => {
    if (!contentWidth) return;

    // Speed
    let currentX = x.get();
    const moveBy = 1 * (delta / 10);

    // English Move Right or Arabic Move Left
    if (!isArabic) {
      currentX -= moveBy; // Move Left
      if (currentX <= -contentWidth) {
        currentX = 0;
        x.set(0);
      } else {
        x.set(currentX);
      }
    } else {
      currentX += moveBy; // Move Right
      if (currentX >= 0) {
        currentX = -contentWidth;
        x.set(-contentWidth);
      } else {
        x.set(currentX);
      }
    }
  });

  return (
    <div className="absolute w-full h-full bottom-10 flex pointer-events-none select-none justify-center items-end overflow-x-clip ">
      <div dir="ltr" className="w-[110%] absolute bg-foreground py-0 lg:py-1.5 rotate-6 md:rotate-3 text-highlight shadow-[0_4px_11px_5px_rgba(0,0,0,0.15)]">
        <motion.div
          ref={containerRef}
          className="flex whitespace-nowrap w-max p-2.5 gap-3"
          style={{ x }}
          initial={{ x: -1000 }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-desc-xs font-medium tracking-[1.5px]">
              {item}
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M4.01052 0.195151C4.03485 -0.0155715 4.38857 -0.0758993 4.4795 0.115816C4.90739 1.0146 5.64911 2.34269 6.55047 2.98672C7.45197 3.62883 8.95095 3.8993 9.93963 4.01065C10.1504 4.03498 10.2088 4.38857 10.017 4.47949C9.11826 4.90739 7.79209 5.64924 7.14806 6.55061C6.50403 7.45197 6.23548 8.95109 6.12413 9.93976C6.0998 10.1505 5.74429 10.2088 5.65529 10.0172C5.22739 9.11839 4.48554 7.79222 3.58225 7.14806C2.68089 6.50403 1.18177 6.23548 0.195021 6.12427C-0.0157015 6.09993 -0.0758991 5.74429 0.115682 5.65528C1.01446 5.22739 2.34256 4.48567 2.98672 3.58238C3.62883 2.68088 3.89931 1.1819 4.01052 0.195151Z" fill="#EFCB68" />
              </svg>
            </div>
          ))}
        </motion.div>
      </div>
      <div dir="ltr" className="w-[110%] absolute bg-highlight py-0 lg:py-1.5 -rotate-6 md:-rotate-3 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <motion.div
          ref={containerRef}
          className="flex whitespace-nowrap w-max p-2.5 gap-3"
          style={{ x }}
          initial={{ x: -1000 }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-desc-xs font-medium tracking-[1.5px]">
              {item}
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M3.30885 0.227101C3.30789 0.0149808 3.65191 -0.087071 3.76503 0.0924423C4.29698 0.933826 5.19169 2.16406 6.16338 2.69609C7.13498 3.22618 8.65551 3.3161 9.65041 3.30882C9.86253 3.30787 9.96266 3.65198 9.78314 3.76511C8.94176 4.29706 7.71345 5.19167 7.18142 6.16336C6.6494 7.13505 6.56141 8.65549 6.56869 9.65038C6.56964 9.8625 6.2236 9.96273 6.1124 9.78312C5.58045 8.94174 4.68584 7.71342 3.71223 7.1815C2.74053 6.64947 1.2201 6.56149 0.227127 6.56866C0.0150064 6.56961 -0.0871451 6.22368 0.0924642 6.11248C0.933848 5.58053 2.16409 4.68582 2.69601 3.7122C3.22611 2.74061 3.31602 1.22008 3.30885 0.227101Z" fill="#231D20" />
              </svg>
            </div>
          ))}

        </motion.div>
      </div>
    </div>
  );
}