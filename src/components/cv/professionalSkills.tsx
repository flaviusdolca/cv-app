import Skills from "./skills"

interface ProfessionalSkillsProps {
    skills: ProfessionalSkillsT,
    labels: ProfessionalSkillslabelsT
}
export interface ProfessionalSkillsT {
    softSkills: string[],
    techSkills: string[]
}
export interface ProfessionalSkillslabelsT {
    proSkills: string,
    softSkills: string,
    techSkills: string
}
export default function ProfessionalSkills({ skills, labels }: ProfessionalSkillsProps) {
    return (<>
        <div id="skills" className='w-full flex flex-col justify-center py-4 mt-12'>
            <span className="text-3xl uppercase border-b-2 border-gray-500">{labels.proSkills}</span>
            <Skills skills={skills.softSkills} label={labels.softSkills} />
            <Skills skills={skills.techSkills} label={labels.techSkills} />
        </div>
    </>)
}