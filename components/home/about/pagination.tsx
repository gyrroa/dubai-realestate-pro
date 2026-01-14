import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePageStore } from "@/store/useAboutStore";

export default function Pagination() {
    const { next, prev } = usePageStore();
    return (
        <div className={cn(
            "sticky bottom-5 left-0 w-full flex justify-between px-2 z-50 mt-auto",
            "lg:absolute lg:top-1/2 lg:bottom-auto lg:left-1/2 lg:-translate-x-1/2 lg:px-30 lg:mt-0"
        )}>
            {/* Buttons remain the same... */}
            <Button variant="about_pagination" size={"about_pagination"} onClick={prev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="w-5 h-4.5 rotate-180 rtl:rotate-0">
                    <path d="M19.5645 9.59241L12.4176 16.7393C11.8816 17.3199 10.9436 17.3199 10.4076 16.7393C9.82691 16.2032 9.82691 15.2652 10.4076 14.7292L15.0977 9.99442H1.42937C0.625349 9.99442 0 9.36907 0 8.56505C0 7.8057 0.625349 7.13568 1.42937 7.13568H15.0977L10.4076 2.44556C9.82691 1.90955 9.82691 0.971524 10.4076 0.435511C10.9436 -0.14517 11.8816 -0.14517 12.4176 0.435511L19.5645 7.58236C20.1452 8.11837 20.1452 9.05639 19.5645 9.59241Z" fill="#897444" />
                </svg>
            </Button>
            <Button variant="about_pagination" size={"about_pagination"} onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="w-5 h-4.5 rotate-0 rtl:rotate-180">
                    <path d="M19.5645 9.59241L12.4176 16.7393C11.8816 17.3199 10.9436 17.3199 10.4076 16.7393C9.82691 16.2032 9.82691 15.2652 10.4076 14.7292L15.0977 9.99442H1.42937C0.625349 9.99442 0 9.36907 0 8.56505C0 7.8057 0.625349 7.13568 1.42937 7.13568H15.0977L10.4076 2.44556C9.82691 1.90955 9.82691 0.971524 10.4076 0.435511C10.9436 -0.14517 11.8816 -0.14517 12.4176 0.435511L19.5645 7.58236C20.1452 8.11837 20.1452 9.05639 19.5645 9.59241Z" fill="#897444" />
                </svg>
            </Button>
        </div>
    );
}