import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col pb-16  px-2 sm:px-8 sm:mx-8 md:mx-20 xl:mx-64 bg-gray-300/80">
            {children}
        </div>
    )

}