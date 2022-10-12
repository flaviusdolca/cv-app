import tw from "tailwind-styled-components"

const Title = tw.h1`
    text-4xl 
    font-semibold
    my-2
`
export default function PageTitle({ title }: { title: string }) {
    return (
        <Title>{title}</Title>
    )

}