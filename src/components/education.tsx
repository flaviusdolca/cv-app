interface ExperienceProps {
    educationLabel: string
    education: EducationT[]
}

export interface EducationT {
    schoolName: string,
    location: string,
    data: string,
    description: string,
}

export default function Education({ education, educationLabel }: ExperienceProps) {
    return (
        <>
            <div className='w-full flex flex-col'>
                <span className="text-3xl uppercase border-b-2 border-gray-500">{educationLabel}</span>

                {education.map((el: any, i: number) => (
                    <div key={i} className='w-full flex flex-col justify-start py-4'>
                        <>
                            <span className="text-xl font-medium">{el.schoolName}</span>
                            <span>{el.location + " " + el.data}</span>
                            <span>{el.description}</span>
                        </>
                    </div>
                ))}
            </div>
        </>)
}
