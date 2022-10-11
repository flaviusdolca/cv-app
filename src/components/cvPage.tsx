import Education, { EducationT } from "./education"
import Experience, { ExperienceT } from "./experience"
import Languages from "./Languages"
import ProfessionalSkills, { ProfessionalSkillslabelsT, ProfessionalSkillsT } from "./professionalSkills"

export interface CvPageProps {
    professionalSkills: ProfessionalSkillsT,
    experiences: ExperienceT[],
    education: EducationT[],
    languages: string[],
    cvPageLabels: {
        skillsLabels: ProfessionalSkillslabelsT,
        experienceLabel: string,
        educationLabel: string,
        languagesLabel: string
    }
}
export default function CvPage({ ...cvPage }: CvPageProps) {
    const { cvPageLabels, professionalSkills, experiences, education, languages } = cvPage
    return <>
        <div className="flex flex-col pb-16  px-2 sm:px-8 sm:mx-8 md:mx-20 xl:mx-64 bg-gray-300/80">
            <ProfessionalSkills skills={professionalSkills} labels={cvPageLabels.skillsLabels} />
            <Experience experiences={experiences} expLabel={cvPageLabels.experienceLabel} />
            <Education education={education} educationLabel={cvPageLabels.educationLabel} />
            <Languages languages={languages} languagesLabel={cvPageLabels.languagesLabel} />
        </div>
    </>
}