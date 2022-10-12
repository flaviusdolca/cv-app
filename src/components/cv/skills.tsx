
interface SkillsProps {
    skills: string[]
    label: string

}

export default function Skills({ skills, label }: SkillsProps) {
    return (
        <div className='my-2'>
            <span className="text-xl font-medium uppercase">{label}</span>
            <ul >
                {skills.map((skill: string, i: number) => (
                    <Skill key={i} skill={skill} />
                ))}
            </ul>
        </div>
    )
}

function Skill({ skill }: { skill: string }) {
    return (
        <li className="text-base sm:text-lg sm:pl-8 sm:leading-7 py-1 sm:py-0" >{skill}</li>
    )

}