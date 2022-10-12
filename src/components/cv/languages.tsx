interface ExperienceProps {
    languagesLabel: string
    languages: string[]
}


export default function Languages({ languages, languagesLabel }: ExperienceProps) {
    return (
        <>

            <div className='w-full flex flex-col justify-start py-4'>
                <span className="text-3xl uppercase border-b-2 border-gray-500">{languagesLabel}</span>
                <div className='flex'>
                    {languages.map((language: string, i: number) => (
                        <span className="text-base sm:text-lg font-medium px-2" key={i}>{language}</span>
                    ))}
                </div>


            </div>
        </>)
}
