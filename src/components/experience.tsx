interface ExperienceProps {
    expLabel: string
    experiences: ExperienceT[]
}

export interface ExperienceT {
    companyName: string,
    city: string,
    occupation: string,
    from: string,
    to: string
    descriptionList: string[]
}

export default function Experience({ experiences, expLabel }: ExperienceProps) {
    return (
        <>
            <div className='w-full flex flex-col'>
                <span className="text-3xl uppercase border-b-2 border-gray-500">{expLabel}</span>
                {experiences.map((el: any, i: number) => (
                    <div key={i} className='w-full flex flex-col justify-start py-4'>
                        <>
                            <span className="text-2xl font-medium" >
                                {el.companyName}
                            </span>
                            <span className="text-xl font-medium">{el.occupation}</span>
                            <div key={i} className='flex flex-col sm:flex-row  sm:items-baseline'>
                                <span className="text-lg font-medium">{el.city}</span>
                                <span className="text-base pl-0 sm:pl-2 font-extralight" >{el.from} - {el.to}</span>
                            </div>
                            <ul>
                                {el.descriptionList.map((desc: string, i: number) =>
                                (
                                    <li className="text-base sm:text-lg sm:pl-8 sm:leading-7 py-1 sm:py-0" key={i}>{desc}</li>
                                ))}
                            </ul>
                        </>
                    </div>
                ))}
            </div>
        </>)
}
