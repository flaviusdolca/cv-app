import { ReactNode } from "react";
import tw from "tailwind-styled-components"

const Container = tw.div`
    relative
    py-6
    w-full
    flex
    flex-col
    items-center
    justify-center
    bg-gradient-to-l
    from
    from-gray-800
    via-gray-900 
    to-gray-900 
    text-gray-300
`
export default function PageHeader({ children }: { children: ReactNode }) {
    return (
        <Container>
            {children}
        </Container>
    )
}