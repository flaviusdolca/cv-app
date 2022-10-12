import { ReactNode } from "react";

export default function PageHeader({ children }: { children: ReactNode }) {
    return (
        <div className='relative py-6 w-full flex flex-col items-center justify-center  bg-gradient-to-l from from-gray-800 to-gray-900 via-gray-900 text-gray-300'>
            {children}
        </div>
    )
}